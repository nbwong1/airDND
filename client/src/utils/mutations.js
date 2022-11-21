import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
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
  mutation addCharacter(
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

export const ADD_THOUGHT = gql`
  mutation addThought($thoughtText: String!) {
    addThought(thoughtText: $thoughtText) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($thoughtId: ID!, $commentText: String!) {
    addComment(thoughtId: $thoughtId, commentText: $commentText) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;
