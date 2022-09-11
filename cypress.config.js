const { defineConfig } = require("cypress");
const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin');


module.exports = defineConfig({
  projectId: 'Visual Testing',
  e2e: {
    baseUrl: 'http://docs.cypress.io',

    setupNodeEvents(on, config) {
      addMatchImageSnapshotPlugin(on, config);
    },
    video: false
  }
});

