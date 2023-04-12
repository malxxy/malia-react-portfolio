const { Schema, model } = require('mongoose');

const projectsSchema = new Schema({
  projectTitle: {
    type: String,
    required: 'You need to include a title!',
    minlength: 1,
    maxlength: 500,
    trim: true,
  },
  projectDescription: {
    type: String,
    required: true,
    trim: true,
  },
  projectLink: {
    type: String,
    required: true,
    trim: true,
  }
});

const Projects = model('Projects', projectsSchema);

module.exports = Projects;
