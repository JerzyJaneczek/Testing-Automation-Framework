import { Given, Then } from '@cucumber/cucumber';
import { request } from '@playwright/test';
import { fixture } from '../../hooks/pageFixture';
import StorePage from '../../pages/store';

let storePage : StorePage


Given('User has access to store site', async function () {
    //Use this function to recieve a token
    storePage = new StorePage(fixture.page)
});


Then('User will place an order', async function () {
    await storePage.placeOrder()
});


Given('Order is successfull retrive order', async function () {
    await storePage.findOrder()
});

Given('There is an order', async function () {
    await storePage.inventoryStatus()
});

Then('Delete that order', async function () {
    await storePage.deleteOrder()
});
