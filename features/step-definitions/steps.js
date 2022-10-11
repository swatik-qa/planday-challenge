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

When(/^I login with invalid (.*) and (.*)$/, async (username, password) => {
    await LoginPage.login(username, password);
});

Then(/^I should see (.*) and (.*)$/, async (username_message, password_message) => {
    await expect(LoginPage.usernameError).toBePresent();
    await expect(LoginPage.passwordError).toBePresent();
});

When(/^I login with "([^"]*)" and "([^"]*)"$/, async (username, password) => {
    await LoginPage.login(username, password);
});

Then(/^I expect to be on the Homepage$/, async () => {
    await expect(browser).toHaveUrl('https://test1234.planday.com/home');
});














