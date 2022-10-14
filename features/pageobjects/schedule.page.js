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

    get gridCellEmployee1() {
        return $('aria/13 October 2022 Employee One');
    }

    get shiftDialogBox() {
        return $('.edit-shift-modal__box');
    }

    get fromField() {
        return $('#shiftStartEnd_start');
    }

    get ToField() {
        return $('#shiftStartEnd_end');
    }

    get createButton() {
        return $('.styled__StyledButton-sc-ygpd71-0*=Create');
    }

    get shiftTile() {
        return $('.shift-tile__inner');
    }

    async setShiftTime(from, to) {
        await this.fromField.setValue(from);
        await this.ToField.setValue(to);
    }

}

module.exports = new SchedulePage();