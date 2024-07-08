/* eslint-disable @typescript-eslint/no-unused-vars */
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // baseUrl: 'https://erickwendel.github.io/vanilla-js-web-app-example',
    baseUrl: 'http://localhost:3000',
    // não vai limpar o estado da tela após cada it
    testIsolation: false,
  },
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
});
