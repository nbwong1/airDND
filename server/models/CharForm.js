const { Schema, model } = require("mongoose");

// parts of the character sheet we will include = 

const charFormSchema = new Schema({
  createdBy: {
    type: String,
    required: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  level: {
    type: Number,
    required: true,
    trim: true,
    default: 1,
  },
  race: {
    type: String,
    required: true,
    trim: true,
  },
  charClass: {
    type: String,
    required: true,
    trim: true,
  },
  alignment: {
    type: String,
    required: true,
    trim: true,
  },
  experience: {
    type: Number,
    required: true,
    default: 0,
    trim: true,
  },
  strength: {
    type: Number,
    required: true,
  },
  dexterity: {
    type: Number,
    required: true,
  },
  constitution: {
    type: Number,
    required: true,
  },
  intelligence: {
    type: Number,
    required: true,
  },
  wisdom: {
    type: Number,
    required: true,
  },
  charisma: {
    type: Number,
    required: true,
  },
  
});

const CharForm = model("CharForm", charFormSchema);

module.exports = CharForm;
