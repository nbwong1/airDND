import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const ADD_CHARACTER = gql`
  mutation addCharForm(
    $name: String!
    $level: Int!
    $class: String!
    $alignment: String!
    $experience: Int!
    $strenght: Int!
    $dexterity: Int!
    $constitution: Int!
    $intelligence: Int!
    $wisdom: Int!
    $charisma: Int!
  ) {
    addCharacter(
      name: $name
      level: $level
      class: $class
      alignment: $alignment
      experience: $experience
      strenght: $strenght
      dexterity: $dexterity
      constitution: $constitution
      intelligence: $intelligence
      wisdom: $wisdom
      charisma: $charisma
    ) {
      _id
      name
      level
      class
      alignment
      experience
      strenght
      dexterity
      constitution
      intelligence
      wisdom
      charisma
      characterAuthor
      createdAt
    }
  }
`;

// export const ADD_THOUGHT = gql`
//   mutation addThought($thoughtText: String!) {
//     addThought(thoughtText: $thoughtText) {
//       _id
//       thoughtText
//       thoughtAuthor
//       createdAt
//       comments {
//         _id
//         commentText
//       }
//     }
//   }
// `;

export const ADD_MEETUP = gql`
  mutation addMeetup($dateTime: String!,$campaignName: String!, $campaignDescription: String!,$campaignDuration: String!, $campaignPartySize: String!, $meetupAddress: String!) {
    addMeetup(dateTime: $dateTime, campaignName: $campaignName, campaignDescription: $campaignDescription, campaignDuration: $campaignDuration, campaignPartySize: $campaignPartySize, meetupAddress: $meetupAddress) {
      _id
      dateTime
      campaignName
      campaignDescription
      campaignDuration
      campaignPartySize
      meetupAddress
      meetupCreatedAt
      host
      comments {
        _id
        commentText
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($meetupId: ID!, $commentText: String!) {
    addComment(meetupId: $meetupId, commentText: $commentText) {
      _id
      dateTime
      campaignName
      campaignDescription
      campaignDuration
      campaignPartySize
      meetupAddress
      meetupCreatedAt
      host
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;
