const db = require('../config/connection');
const { Projects } = require('../models');
const projectSeeds = require('./projectSeeds.json');

db.once('open', async () => {
  await Projects.deleteMany({});
  await Projects.create(projectSeeds);

  console.log('all done!');
  process.exit(0);
});
