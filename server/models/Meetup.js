const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const meetupSchema = new Schema({
  dateTime: {
    type: Date,
    required: true,
    get: (timestamp) => dateFormat(timestamp),
  },
  host: {
    type: String,
    required: true,
    trim: true,
  },
  campaignName: {
    type: String,
    required: true,
    trim: true,
  },
  campaignDescription: {
    type: String,
    required: true,
    trim: true,
  },
  campaignDuration: {
    type: String,
    required: true,
    trim: true,
  },
  campaignPartySize: {
    type: Number,
    required: true,
    default: 2,
  },
  meetupAddress: {
    type: String,
    required: true,
    trim: true,
  },
  meetupCreatedAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      commentAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});
const Meetup = model('Meetup', meetupSchema);
module.exports = Meetup;