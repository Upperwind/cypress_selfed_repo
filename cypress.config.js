const { defineConfig } = require("cypress");

module.exports = defineConfig(
  {
    projectId: "tnpi19",

    e2e: {
      setupNodeEvents(on, config) {
        // implement node event listeners here
      },
    },
  },
  {
    e2e: {
      setupNodeEvents(on, config) {
        // implement node event listeners here
      },
    },
  }
);
