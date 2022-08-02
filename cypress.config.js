const { defineConfig } = require('cypress')

module.exports = defineConfig({
  // chromeWebSecurity: false,
  viewportWidth: 1440,
  viewportHeight: 900,
  defaultCommandTimeout: 10000,
  chromeWebSecurity: false,
  failOnStatusCode: false,
  video: false,
  reports: false,
  // projectId: '3a53az',
  screenshots: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    failOnStatusCode: false,
    baseUrl: 'https://mercadoatevc.qa-h47ppbq-7yochn4d6v67o.us-4.platformsh.site',
  },
})
