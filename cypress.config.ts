import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:4200", // URL base para las pruebas
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      charts: true,
      overwrite: false,
      html: false,
      json: true
    },
    screenshotOnRunFailure: true, // Toma screenshots en fallos
    video: true,                  // Graba video de las pruebas
    videosFolder: "cypress/videos", // Carpeta para videos
    screenshotsFolder: "cypress/screenshots", // Carpeta para screenshots
  },
});
