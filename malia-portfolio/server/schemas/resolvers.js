const { Projects } = require('../models');

const resolvers = {
  Query: {
    thoughts: async () => {
      return Projects.find();
    },

    thought: async (parent, { projectId }) => {
      return Projects.findOne({ _id: projectId });
    },
  },

  Mutation: {
    addProject: async (parent, { projectTitle, projectDescription, projectLink }) => {
      return Thought.create({ projectTitle, projectDescription, projectLink });
    },
    removeProject: async (parent, { thoughtId }) => {
      return Thought.findOneAndDelete({ _id: projectId });
    }
  },
};

module.exports = resolvers;
