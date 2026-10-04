import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { test } from "../fixtures/bdd-fixtures";

const { Given, When, Then } = createBdd(test);

Given("the user opens the application", async ({ homePage }) => {
  await homePage.open();
});

Then("the page title should be {string}", async ({ homePage }, expectedTitle: string) => {
  await homePage.expectTitle(expectedTitle);
});

Given("I navigate to the login view", async ({ loginPage }) => {
  await loginPage.navigate();
});

When("I execute login with {string} and {string}", async ({ loginPage }, user: string, pass: string) => {
  await loginPage.login(user, pass);
});

Then("I see the authentication error message", async ({ loginPage }) => {
  await expect(loginPage.errorMessage).toBeVisible();
});
