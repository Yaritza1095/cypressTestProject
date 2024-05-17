const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalStudio:true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://ecommerce-playground.lambdatest.io",
  },
});
