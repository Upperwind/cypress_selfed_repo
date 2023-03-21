const { defineConfig } = require("cypress");

module.exports = defineConfig(
  {
    projectId: "tnpi19",
    e2e: {
      
      env: {
        "baseUrl": "https://petstore.swagger.io/v2",
        "BASE_PATH": "user"
        }
      
    },
  }
);
