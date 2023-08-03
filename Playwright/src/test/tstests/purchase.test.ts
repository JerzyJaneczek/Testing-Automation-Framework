import { test, expect } from "@playwright/test";

import LoginPage from "../../pages/login";
import StorePage from "../../pages/store";
import ItemPage from "../../pages/item";
import CheckoutPage from "../../pages/checkout";
import * as locators from "../../locators/locators.json"
import * as data from '../../data/data.json'




test.describe("Purchase and Checkout Items", async () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page, baseURL }) => {
        loginPage = new LoginPage(page);
        await page.goto(locators.LoginPage.url);
    })

    test("Login and Add item to Cart", async ({page}) => {
        /* LOGIN TO ACCOUNT */
        await loginPage.enterUsername();
        await loginPage.enterPassword();

        await loginPage.clickLoginButon();

        await expect(page).toHaveURL(locators.StorePage.url);

        /* SELECT ITEM */
        const storePage = new StorePage(page);

        await storePage.clickItem(locators.StorePage.StoreItem)
        await expect(page).toHaveURL(locators.ItemPage.url);

        /*ADD ITEM TO CART */
        const itemPage = new ItemPage(page)

        await itemPage.addToCart(locators.ItemPage.ItemDetailsAddToCartButton)
        const value = await page.innerText(locators.CheckoutPage.CartValue)
        await expect(value).toBe("1")
        await itemPage.clickCart(locators.CheckoutPage.Cart)

        /* Completing Checkout */
        const checkoutPage = new CheckoutPage(page)

        await checkoutPage.goToCheckout()
        await checkoutPage.fillInFormOne()
        await checkoutPage.finishOrder()

    })
})