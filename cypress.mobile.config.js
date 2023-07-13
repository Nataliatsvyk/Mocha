const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportHeight: 800,
    viewportWidth: 600,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
