import { Page } from "@playwright/test";
import * as locators from '../locators/locators.json';
import * as data from   '../data/data.json'
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers"


export default class LoginPage {

    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }
    async goToLoginPage() {
        await this.base.goto(locators.LoginPage.url)
    }

    async enterUsername() {
        await this.page.locator(locators.LoginPage.LoginUsernameBox).type(data.username);
    }

    async enterInvalidUsername() {
        await this.page.locator(locators.LoginPage.LoginUsernameBox).type(data.invalidUsername);
    }

    async enterPassword() {
        await this.page.locator(locators.LoginPage.LoginPasswordBox).type(data.password);
    }

    async clickLoginButon() {
        await this.page.click(locators.LoginPage.LoginButton);
    }



}