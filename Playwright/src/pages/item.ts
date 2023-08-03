import { Page } from "@playwright/test";
import * as locators from '../locators/locators.json';
import Header from "./header";

/*Make a header class that includes a function to go to cart and then inherit that function here? */
export default class ItemPage extends Header {

    constructor(public page: Page) {
        super(page)
    }

    get getURL(){
        return this.page.locator(locators.StorePage.url)
    }

    async addToCart(locator : string) {
        await this.page.locator(locator).click();
    }


}