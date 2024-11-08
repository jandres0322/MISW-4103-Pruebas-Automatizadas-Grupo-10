const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../page_objects/LoginPage');


When('I enter email {kraken-string}', async function (email) {
    const loginPage = new LoginPage(this.driver);
    await loginPage.enterEmail(email);
});

When('I enter password {kraken-string}', async function (password) {
    const loginPage = new LoginPage(this.driver);
    await loginPage.enterPassword(password);
})

When('I click next', async function() {
    const loginPage = new LoginPage(this.driver);
    await loginPage.clickNext();
})
