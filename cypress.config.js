const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://hotel-example-site.takeyaqa.dev/en-US/index.html",
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
  },
  env: {
    allureReuseAfterSpec: true,
  },
});
