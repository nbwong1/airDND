const db = require('../config/connection');
const { User, Meetup, Character, CharForm } = require('../models');
const userSeeds = require('./userSeeds.json');
const meetupSeeds = require('./meetupSeeds.json');
const charFormSeeds = require('./charFormSeeds.json');

db.once('open', async () => {
  try {
    await Meetup.deleteMany({});
    await CharForm.deleteMany({});
    await User.deleteMany({});
    // does this seed need to occur separately from the rest?
    // await Character.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < meetupSeeds.length; i++) {
      const { _id, host } = await Meetup.create(meetupSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: host },
        {
          $addToSet: {
            meetups: _id,
          },
        }
      );
    }
    for (let i = 0; i < charFormSeeds.length; i++) {
      const { _id, host } = await CharForm.create(charFormSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: host },
        {
          $addToSet: {
            charforms: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
