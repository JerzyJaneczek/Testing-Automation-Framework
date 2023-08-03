import { test, expect } from "@playwright/test";
import LoginPage from "../../pages/login";
import * as locators from "../../locators/locators.json"
import * as data from '../../data/data.json'



test.describe("Login Feature", async () => {

    let loginPage: LoginPage;

    test.beforeEach(async ({ page, baseURL }) => {
        loginPage = new LoginPage(page);
        await page.goto(locators.LoginPage.url);
    })

    test("Standard Login With Correct Credentials", async ({page}) => {
        
        await loginPage.enterUsername();
        await loginPage.enterPassword();

        await loginPage.clickLoginButon();

        await expect(page).toHaveURL(locators.StorePage.url);
    })

    test("Login with Invalid Credentials", async ({page}) => {
        await loginPage.enterInvalidUsername()
        await loginPage.enterPassword()

    })

})