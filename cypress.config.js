const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'z7r4bs',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://saucedemo.com',
    retries: 2,
    chromeWebSecurity: false
  },
});
