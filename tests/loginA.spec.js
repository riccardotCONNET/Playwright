const { test, expect } = require('@playwright/test');
const { LoginPage } = require ( '../pages/LoginPage');
import testData from "../testData/testData.json";

test('Login and logout using POM', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(testData.data[0].email, testData.data[0].password);
  await loginPage.logout();

  await expect(loginPage.logoutHeading).toBeVisible();
});