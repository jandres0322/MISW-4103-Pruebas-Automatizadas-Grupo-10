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
}
module.exports = MembersPage;
