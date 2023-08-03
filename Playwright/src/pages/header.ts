import { Page } from "@playwright/test";
import * as locators from '../locators/locators.json';


export default class Header {

    constructor(public page: Page) {
    }


    async clickCart() {
        await this.page.locator(locators.CheckoutPage.Cart).click()
    }


}