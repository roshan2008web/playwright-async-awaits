// Minimal Playwright config for running the labs
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: 'tests',
  timeout: 30_000,
  reporter: [['list']], // Simple console reporter
  use: {
    trace: 'on-first-retry' // Collect trace if you add retries later
  }
});
