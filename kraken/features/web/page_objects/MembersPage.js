const assert = require('assert');
class MembersPage {
    constructor(driver) {
        this.driver = driver;
    }

    async navigateToMembers() {
        const element = await this.driver.$('[data-test-nav="members"]');
        await element.click();
    }

    async clickNewMember() {
        const element = await this.driver.$('[data-test-new-member-button="true"]');
        await element.click();
    }

    async enterName(name) {
        const element = await this.driver.$('#member-name');
        await element.setValue(name);
    }

    async enterEmail(email) {
        const element = await this.driver.$('#member-email');
        await element.setValue(email);
    }

    async enterNote(note) {
        const element = await this.driver.$('#member-note');
        await element.setValue(note);
    }

    async clickSaveMember() {
        const element = await this.driver.$('[data-test-button="save"]');
        await element.click();
    }

    async getMensaje(mensaje) {
        const errorMessageElement = await this.driver.$('.error .response');
        await errorMessageElement.waitForDisplayed({ timeout: 10000 });
    
        const errorMessageText = await errorMessageElement.getText();
        assert.strictEqual(errorMessageText, mensaje, 'El mensaje de error no es el esperado.');
    }
}
module.exports = MembersPage;
