const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I click the cookie consent button$/, async () => {
    await LoginPage.clickCookieConsentButton();
});

Then(/^I see the Login form$/, async () => {
    await expect(LoginPage.loginForm).toBeDisplayed();
});

Then(/^I expect to see the Username field$/, async () => {
    await expect(LoginPage.inputUsername).toBeDisplayed();
});

Then(/^I expect to see the Password field$/, async () => {
    await expect(LoginPage.inputPassword).toBeDisplayed();
});

Then(/^I expect to see the Login button$/, async () => {
    await expect(LoginPage.btnSubmit).toBeDisplayed();
});










