const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    meetups: [Meetup]
    charForms: [CharForm]
  }

  type Meetup {
    _id: ID
    dateTime: String
    host: String
    campaignName: String
    campaignDescription: String
    campaignDuration: String
    campaignPartySize: Int
    meetupAddress: String
    meetupCreatedAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type CharForm {
    _id: ID
    createdBy: String
    name: String
    level: Int
    race: String
    charClass: String
    background: String
    alignment: String
    experience: Int
    strength: Int
    dexterity: Int
    constitution: Int
    intelligence: Int
    wisdom: Int
    charisma: Int
    # add user to CharForm
    users: [User]
  }

  type Auth {
    token: ID!
    user: User
  }
  
  type Query {
    users: [User]
    user(username: String!): User
    meetups(username: String): [Meetup]
    meetup(meetupId: ID!): Meetup
    charForms: [CharForm]
    charForm(charFormId: ID!): CharForm
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addMeetup(dateTime: String!, campaignName: String!, campaignDescription: String!, campaignDuration: String!, campaignPartySize: String!, meetupAddress: String!): Meetup
    addComment(meetupId: ID!, commentText: String!): Meetup
    addCharForm(name: String!, level: Int!, race: String!, charClass: String, alignment: String, experience: Int, strength: Int, dexterity: Int, constitution: Int, intelligence: Int, wisdom: Int, charisma: Int) : CharForm
    removeMeetup(meetupId: ID!): Meetup
    removeComment(meetupId: ID!, commentId: ID!): Meetup
    removeCharForm(charFormId: ID!): CharForm
  }
`;

module.exports = typeDefs;
