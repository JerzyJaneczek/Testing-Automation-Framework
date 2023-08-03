import { Given, When, Then } from "@cucumber/cucumber";
import { Page, expect } from "@playwright/test";

import LoginPage from "../../pages/login";
import StorePage from "../../pages/store";
import ItemPage from "../../pages/item";

import * as locators from '../../locators/locators.json'
import * as data from '../../data/data.json'
import { fixture } from "../../hooks/pageFixture";
import Assert from "../../helper/wrapper/assert";


let storePage : StorePage;
let assert : Assert;


Given('User is on the store page', async function () {
    storePage = new StorePage(fixture.page);
});

Then('User will click on item', async function () {
    await storePage.clickItem(locators.StorePage.StoreItem)
    //await assert.assertURL(locators.ItemPage.url)
});

When('User clicks to add item to cart', async function () {
    const itemPage = new ItemPage(fixture.page)
    await itemPage.addToCart(locators.ItemPage.ItemDetailsAddToCartButton)
});


Then('Cart value should be {int}', async function (int) {
    const value = await fixture.page.innerText(locators.CheckoutPage.CartValue)
    //await expect(value).toBe("1")
});


