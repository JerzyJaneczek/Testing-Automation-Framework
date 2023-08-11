
import { Given, Then } from '@cucumber/cucumber';
import LoginPage from '../../pages/login';
import { request } from '@playwright/test';
import { fixture } from '../../hooks/pageFixture';

let loginPage : LoginPage

Given('User has access to the site', async function () {
    //Use this function to recieve a token
    loginPage = new LoginPage(fixture.page)
    //await loginPage.createUserAccount(request)
});

  
Then('User will create a new account', async function () {
    await loginPage.createUserAccount()
});

Then('User will login to that account', async function () {
    await loginPage.loginToPage()
});

  
Then('User will be able to fetch user info', async function () {
    await loginPage.getUserInfo()
});

Then('User will be able to edit user info', async function () {
    await loginPage.updateUserInfo()
})

Then('User will be able to fetch new user info', async function () {
    await loginPage.getEditedUserInfo()
});

Then('User will logout', async function () {
    await loginPage.logout()
});

Then('User will delete account', async function () {
    await loginPage.deleteAccount()
});

Then('User will fetch info of invalid account', async function () {
    await loginPage.getInvalidUser()
});