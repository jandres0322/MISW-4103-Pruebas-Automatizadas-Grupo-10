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
        // Espera a que el campo en la sección específica esté presente y visible
        const sectionField = await this.driver.$('section.gh-portal-input-section input#input-name');
        await sectionField.waitForExist({ timeout: 5000 });
        await sectionField.waitForDisplayed({ timeout: 5000 });

        // Establece el valor en el campo de nombre
        await sectionField.setValue(email);
    }

    async enterPasswordV2(password) {
        const emailField = await this.driver.$('section.gh-portal-input-section input#input-email');
        await emailField.waitForExist({ timeout: 5000 });
        await emailField.setValue(password);
    }

    async clickNext() {
        const element = await this.driver.$('#ember5');
        await element.click();
    }

  
}
module.exports = LoginPage;
