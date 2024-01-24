const { defineConfig } = require("cypress");
const extensionLoader = require("cypress-browser-extension-plugin/loader");
const path = require("path");
module.exports = defineConfig({
  e2e: {
    // supportFile: "./cypress/support/index.js",
    // pluginsFile: "./cypress/support/index.js",
    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser, launchOptions) => {
        console.log(`${__dirname}/github-repo-size-public`);
        launchOptions.extensions.push(`${__dirname}/github-repo-size-public`);
        launchOptions.args.push("--auto-open-devtools-for-tabs");
        console.log(launchOptions);
        return launchOptions;
        // config.chromeWebSecurity = false;
        // const addExtensionCommands = require("cypress-browser-extension-plugin/commands");
        // addExtensionCommands(Cypress);
        // extensionLoader.load({
        //   validBrowser: ["chrome"],
        //   quiet: false,
        //   source:
        //     "/Users/harsha.sharmagelato.com/Dev/work/sandbox/github-repo-size-public",
        //   skipHooks: true,
        // });
      });
    },
    env: {
      allureReuseAfterSpec: true,
    },
  },
});
