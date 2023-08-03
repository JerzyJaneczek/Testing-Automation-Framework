import { Page } from "@playwright/test";
import * as locators from '../locators/locators.json';
import * as data from '../data/data.json'


export default class CheckoutPage {

    constructor(public page: Page) {
    }

    get getURL(){
        return this.page.locator(locators.CheckoutPage.url)
    }

    async goToCheckout() {
        await this.page.locator(locators.CheckoutPage.CheckoutButton).click();
    }

    async fillInFormOne() {

        await this.page.locator(locators.CheckoutPage.CheckoutFnameInput).click();
        await this.page.locator(locators.CheckoutPage.CheckoutFnameInput).fill(data.fname);
        await this.page.locator(locators.CheckoutPage.CheckoutFnameInput).press('Tab');
        await this.page.locator(locators.CheckoutPage.CheckoutLnameInput).fill(data.lname);
        await this.page.locator(locators.CheckoutPage.CheckoutLnameInput).press('Tab');
        await this.page.locator(locators.CheckoutPage.CheckoutPostal).fill(data.postal);
        await this.page.locator(locators.CheckoutPage.CheckoutContinue).click();
    }

    async finishOrder() {
        await this.page.locator(locators.CheckoutPage.CheckoutFinish).click();
    }

    async backHome() {
        await this.page.locator("//*[@id='back-to-products']").click();
    }


}