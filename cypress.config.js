const { defineConfig } = require("cypress");

module.exports = defineConfig({

  defaultCommandTimeout: 6000,
  chromeWebSecurity: false,

  retries: {
    runMode: 1
  },
  projectId: "ra9cu8",

  e2e: {
    baseUrl: "https://betterask.erni/apptype-chooser/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js'
  },
});
