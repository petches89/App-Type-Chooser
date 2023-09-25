const { defineConfig } = require("cypress");

module.exports = defineConfig({

  defaultCommandTimeout: 6000,

  env: {
    url: "https://rahulshettyacademy.com"
  },
  retries: {
    runMode: 1
  },
  projectId: "ra9cu8",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js'
  },
});
