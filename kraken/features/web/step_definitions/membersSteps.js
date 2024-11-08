const { Given, When, Then } = require('@cucumber/cucumber');
const MembersPage = require('../page_objects/MembersPage');


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
    // Espera un momento para que aparezca el mensaje después de guardar
    await this.driver.pause(5000); 

    // Busca el contenedor principal del mensaje "Created"
    const createdContainer = await this.driver.$(".gh-member-details-attribution p");

    // Verifica si el elemento está presente y visible
    const isDisplayed = await createdContainer.isDisplayed();
    if (!isDisplayed) {
        throw new Error("El mensaje 'Created' no está visible en la página.");
    }

    // Opcional: Obtener el texto y validar que contiene "Created"
    const textContent = await createdContainer.getText();
    if (!textContent.includes("Created")) {
        throw new Error("El mensaje 'Created' no se encuentra en el texto del elemento.");
    }
});