import { Given, When, Then } from "@cucumber/cucumber";

import { fixture } from "../../hooks/pageFixture";
import Assert from "../../helper/wrapper/assert";
import CheckoutPage from "../../pages/checkout";
import ItemPage from "../../pages/item";

let itemPage : ItemPage
let checkoutPage : CheckoutPage;
let assert : Assert;

Given('User goes to checkout', async function () {
    itemPage = new ItemPage(fixture.page);
    await itemPage.clickCart()
    assert = new Assert(fixture.page)
});

  
Then('User will finish order', async function () {
    checkoutPage = new CheckoutPage(fixture.page)
    await checkoutPage.goToCheckout()
});  


Then('User will fill out form', async function () {
    await checkoutPage.fillInFormOne()   
});

Then('User will finish the order', async function () {
    await checkoutPage.finishOrder()
});

  
When('User finishes order go back home', async function () {
    await checkoutPage.backHome()
});