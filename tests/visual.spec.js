const { test, expect } = require('@playwright/test');
test('Take visual of particular area with difference in entered text', async ({ page }) => {
    await page.goto('https://ecommerce-playground.lambdatest.io/');
    await page.getByRole("textbox", {name : "Search For Products"}).fill('Hi Lambdatest')
    await expect(page).toHaveScreenshot("visual-enter-text.png");
});