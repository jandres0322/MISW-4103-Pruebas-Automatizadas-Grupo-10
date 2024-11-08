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

    async clickNext() {
        const element = await this.driver.$('#ember5');
        await element.click();
    }

  
}
module.exports = LoginPage;
