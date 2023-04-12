const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Projects {
    _id: ID
    projectTitle: String
    projectDescription: String
    projectLink: String
  }

  type Query {
    thoughts: [Projects]!
    thought(projectId: ID!): Projects
  }

  type Mutation {
    addProject(projectTitle: String!, projectDescription: String!, projectLink: String!): Projects
    removeProject(projectId: ID!): Projects
  }
`;

module.exports = typeDefs;
