

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */

    get cookieButton() {
        return $('#cookie-consent-button');
    }

    get loginForm() {
        return $('#login');
    }
    get inputUsername() {
        return $('#Username');
    }

    get inputPassword() {
        return $('#Password');
    }

    get btnSubmit() {
        return $('#MainLoginButton');
    }

    get usernameError() {
        return $('#Username-validation-error');
    }

    get passwordError() {
        return $('#Password-validation-error');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async clickCookieConsentButton() {
        await this.cookieButton.click();
    }
    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('');
    }
}

module.exports = new LoginPage();
