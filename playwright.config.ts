import { defineConfig, devices } from "@playwright/test";
import { defineBddConfig } from "playwright-bdd";
import { Config } from "./utils/config";

const testDir = defineBddConfig({
  features: "features/*.feature",
  steps: ["src/steps/*.ts"],
  importTestFrom: "./src/fixtures/bdd-fixtures",
});

export default defineConfig({
  testDir,
  fullyParallel: true,
  workers: process.env.CI ? 2 : undefined,
  reporter: [
    ["list"],
    [
      "allure-playwright",
      {
        outputFolder: "allure-results",
      },
    ],
  ],
  use: {
    baseURL: Config.baseUrl,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "on-first-retry",
    ignoreHTTPSErrors: true,
  },
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
  ],
});