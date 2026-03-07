const { test, expect } = require("@playwright/test");
test("Modify API responses", async  ({ page }) => {
    // Get the response and add to it
    await page.route("*/**/api/v1/fruits", async (route) => {
    const response = await route.fetch();
    const json = await response.json();
    json.push(
        { name: "Dragon fruit", id: 11 },
        { name: "Gooseberries", id: 12 },
        { name: "Coconut", id: 13 }
    );
    // Fulfill using the original response, while patching the response body with the given JSON object.
    await route.fulfill({ response, json });
    });
    // Go to the page
    await page.goto("https://demo.playwright.dev/api-mocking");
    // Assert that the new fruit is visible
    await expect(page.getByText("Dragon fruit", { exact: true })).toBeVisible();
});