const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportHeight: 1080,
    viewportWidth: 1920,
    retries: 2,
    pageLoadTimeout:120000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
