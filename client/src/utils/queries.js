import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      meetups {
        _id
        dateTime
        campaignName
        campaignDescription
        campaignDuration
        campaignPartySize
        meetupAddress
        meetupCreatedAt
      }
    }
  }
`;

export const QUERY_CHARACTER = gql`
  query getCharacter($characterId: ID!) {
    character(characterId: $characterId) {
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

// export const QUERY_THOUGHTS = gql`
//   query getThoughts {
//     thoughts {
//       _id
//       thoughtText
//       thoughtAuthor
//       createdAt
//     }
//   }
// `;

export const QUERY_MEETUPS = gql`
  query getMeetups {
    meetups {
      _id
      dateTime
      campaignName
      campaignDescription
      campaignDuration
      campaignPartySize
      meetupAddress
      meetupCreatedAt
      host
    }
  }
`;

// export const QUERY_SINGLE_THOUGHT = gql`
//   query getSingleThought($thoughtId: ID!) {
//     thought(thoughtId: $thoughtId) {
//       _id
//       thoughtText
//       thoughtAuthor
//       createdAt
//       comments {
//         _id
//         commentText
//         commentAuthor
//         createdAt
//       }
//     }
//   }
// `;
export const QUERY_SINGLE_MEETUP = gql`
  query getSingleMeetup($meetupId: ID!) {
    meetup(meetupId: $meetupId) {
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
        commentAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      meetups {
        _id
        dateTime
        campaignName
        campaignDescription
        campaignDuration
        campaignPartySize
        meetupAddress
        meetupCreatedAt
        host
      }
    }
  }
`;
