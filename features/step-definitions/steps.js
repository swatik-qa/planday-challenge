const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page');
const SchedulePage = require('../pageobjects/schedule.page');

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


Then(/^I expect to be on the "(.*)"$/, async (name) => {
    const pageUrls = {
        'Homepage': "https://test1234.planday.com/home",
        'Schedule page': "https://test1234.planday.com/schedule",
    };
    await expect(browser).toHaveUrl(pageUrls[name]);
});

When(/^I click the navigation menu item Schedule$/, async () => {
    await SchedulePage.navScheduleLink.click();
});

Then(/^I should be able to see 3 employees$/, async () => {
    // switch to iframe as the sheet is in an iframe
    const mainIframe = await $('[data-testID="app-frame"]');
    await mainIframe.waitForExist({ timeout: 5000 });
    await browser.switchToFrame(mainIframe);

    // interact with element within iframe
    await SchedulePage.employeeText;
    let count = await $$('.row-header3__text__title*=Employee');
    expect(count.length).toEqual(3);
});



















