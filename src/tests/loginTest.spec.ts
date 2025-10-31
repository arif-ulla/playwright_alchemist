import { test } from "@playwright/test";
import LoginPage from "../pages/LoginPage";


test("test", async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();
    await loginPage.fillUsername("arifulla.ghs822@agentforce.com");
    await loginPage.fillPassword("myAbb@786s");

    const homePage = await loginPage.clickLoginButton();
    await homePage.expectServiceTitleToBeVisible();
})