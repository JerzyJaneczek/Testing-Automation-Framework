import { Page } from "@playwright/test";
import * as locators from '../locators/locators.json';
import Header from "./header";


export default class StorePage extends Header {

    constructor(public page: Page) {
        super(page)
    }

    get getURL(){
        return this.page.locator(locators.StorePage.url)
    }

    async clickItem(item : string) {
        await this.page.locator(item).click();
    }


}