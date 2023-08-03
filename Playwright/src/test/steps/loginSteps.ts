import { Given, When, Then } from "@cucumber/cucumber";

import LoginPage from "../../pages/login";

import * as locators from '../../locators/locators.json'
import { fixture } from "../../hooks/pageFixture";
import Assert from "../../helper/wrapper/assert";
import CheckoutPage from "../../pages/checkout";


let loginPage : LoginPage;
let assert : Assert;


Given('User navigates to webpage', async function () {
    loginPage = new LoginPage(fixture.page);
    await loginPage.goToLoginPage()
    assert = new Assert(fixture.page) 
});


Then('User inputs username', async function () {
  await loginPage.enterUsername();
});

Then('User inputs password', async function () {
  await loginPage.enterPassword()
});

When('User clicks on login button', async function () {
  await loginPage.clickLoginButon()
  });

Then('Login should be success', async function () {
  await assert.assertURL(locators.StorePage.url)
  });