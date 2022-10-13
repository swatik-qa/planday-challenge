const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SchedulePage extends Page {
    /**
     * define selectors using getter methods
     */

    get navScheduleLink() {
        return $('=Schedule');
    }

    get employeeText() {
        return $('.row-header3__text__title*=Employee').waitForExist({ timeout: 5000 });
    }
}

module.exports = new SchedulePage();