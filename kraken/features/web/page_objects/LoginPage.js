class LoginPage {
    constructor(driver) {
        this.driver = driver;
    }

    async enterEmail(email) {
        const element = await this.driver.$('#identification');
        await element.setValue(email);
    }

    async enterPassword(password) {
        const element = await this.driver.$('#password');
        await element.setValue(password);
    }

    async enterEmailV2(email) {
        const element = await this.driver.$('[name="identification"]');
        await element.setValue(email);
    }
    

    async enterPasswordV2(password) {
        const element = await this.driver.$('[name="password"]');
        await element.setValue(password);
    }

    async clickNext() {
        const element = await this.driver.$('#ember5');
        await element.click();
    }

    async clickNextV2() {
        const element = await this.driver.$(".login.gh-btn.gh-btn-login");
        await element.click();
    }

    async clickSubscribe() {
        const element = await this.driver.$('.gh-portal-triggerbtn-container');
        await element.click();
    }

  
}
module.exports = LoginPage;
