const { Given, When, Then } = require('@cucumber/cucumber');
const MembersPage = require('../page_objects/MembersPage');
const { faker } = require('@faker-js/faker');
const assert = require('assert');

When('I click Members', async function() {
    const membersPage = new MembersPage(this.driver);
    await membersPage.navigateToMembers();
})

When('I click New Members', async function() {
    const membersPage = new MembersPage(this.driver);
    await membersPage.clickNewMember();
})

When('I enter name member {kraken-string}', async function (name) {
    const membersPage = new MembersPage(this.driver);
    await membersPage.enterName(name);
});

When('I enter email member {kraken-string}', async function (email) {
    const randomEmail = faker.internet.email();
    const membersPage = new MembersPage(this.driver);
    await membersPage.enterEmail(randomEmail);
});

When('I enter emailinvalido member {kraken-string}', async function (email) {
    const membersPage = new MembersPage(this.driver);
    await membersPage.enterEmail(email);
});

When('I enter note member {kraken-string}', async function (note) {
    const membersPage = new MembersPage(this.driver);
    await membersPage.enterNote(note);
});

When('I click save member', async function() {
    const membersPage = new MembersPage(this.driver);
    await membersPage.clickSaveMember();
})


Then('I should see the Created message with the date', async function () {
    
    await this.driver.pause(5000); 
    const createdContainer = await this.driver.$(".gh-member-details-attribution p");
    
    const isDisplayed = await createdContainer.isDisplayed();
    if (!isDisplayed) {
        throw new Error("El mensaje 'Created' no está visible en la página.");
    }

    const textContent = await createdContainer.getText();
    if (!textContent.includes("Created")) {
        throw new Error("El mensaje 'Created' no se encuentra en el texto del elemento.");
    }
});


Then('I should see the error message "Invalid Email."', async function () {
    const errorMessageElement = await this.driver.$('.error .response');
    await errorMessageElement.waitForDisplayed({ timeout: 10000 });

    const errorMessageText = await errorMessageElement.getText();
    assert.strictEqual(errorMessageText, 'Invalid Email.', 'El mensaje de error no es el esperado.');
    
});