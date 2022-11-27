const { AuthenticationError } = require("apollo-server-express");
const { User, Meetup, CharForm } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("meetups").populate("charForms");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .populate("meetups")
        .populate("charForms");
    },
    meetups: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Meetup.find(params).sort({ createdAt: -1 });
    },
    meetup: async (parent, { meetupId }) => {
      return Meetup.findOne({ _id: meetupId });
    },
    charForms: async (parent, { username }) => {
      const params = username ? { username } : {};
      return CharForm.find(params).sort({ createdAt: -1 });
    },

    charForm: async (parent, { charFormId }) => {
      return CharForm.findOne({ _id: charFormId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("meetups").populate("charForms");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    // addMeetup with the following campaignName, campaignDescription, campaignPartySize, host, dateTime, meetupAddress
    addMeetup: async (
      parent,
      {
        dateTime,
        campaignName,
        campaignDescription,
        campaignDuration,
        campaignPartySize,
        meetupAddress,
      },
      context
    ) => {
      if (context.user) {
        const meetup = await Meetup.create({
          dateTime,
          host: context.user.username,
          campaignName,
          campaignDescription,
          campaignDuration,
          campaignPartySize,
          meetupAddress,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { meetups: meetup._id } }
        );

        return meetup;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addComment: async (parent, { meetupId, commentText }, context) => {
      if (context.user) {
        return Meetup.findOneAndUpdate(
          { _id: meetupId },
          {
            $addToSet: {
              comments: { commentText, commentAuthor: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    // addCharacter
    addCharForm: async (parent, { name, level, race, charClass, alignment, experience, strength, dexterity, constitution, intelligence, wisdom, charisma },
      context
    ) => {
      if (context.user) {
        const charForm = await CharForm.create({
          createdBy: context.user.username,
          name,
          level,
          race,
          charClass,
          alignment,
          experience,
          strength,
          dexterity,
          constitution,
          intelligence,
          wisdom,
          charisma,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { charForms: charForm._id } }
        );

        return charForm;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeMeetup: async (parent, { meetupId }, context) => {
      if (context.user) {
        const meetup = await Meetup.findOneAndDelete({
          _id: meetupId,
          host: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { meetups: meetup._id } }
        );

        return meetup;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeComment: async (parent, { meetupId, commentId }, context) => {
      if (context.user) {
        return Meetup.findOneAndUpdate(
          { _id: meetupId },
          {
            $pull: {
              comments: {
                _id: commentId,
                commentAuthor: context.user.username,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeCharForm: async (parent, { charFormId }, context) => {
      if (context.user) {
        const charForm = await CharForm.findOneAndDelete({
          _id: charFormId,
          createdBy: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { charForms: charForm._id } }
        );

        return charForm;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
