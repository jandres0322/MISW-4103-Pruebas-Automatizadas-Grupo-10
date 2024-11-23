const { Given, When, Then } = require('@cucumber/cucumber');
const MembersPage = require('../page_objects/MembersPage');
const { faker } = require('@faker-js/faker');
const axios = require('axios');
const fetch = require('node-fetch');


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


Then('I should see the error message {kraken-string}', async function (mensaje) {

    const membersPage = new MembersPage(this.driver);
    await membersPage.getMensaje(mensaje);
    
});

Then('I should see Please Enter an Email', async function () {
    
    await this.driver.pause(5000); 
    const createdContainer = await this.driver.$("div.error p");
    
    const isDisplayed = await createdContainer.isDisplayed();
    if (!isDisplayed) {
        throw new Error("El mensaje 'Created' no está visible en la página.");
    }

    const textContent = await createdContainer.getText();
    if (!textContent.includes("Invalid Email.")) {
        throw new Error("El mensaje 'Invalid Email.' no se encuentra en el texto del elemento.");
    }
});


Then('I should see Please Enter an Note long', async function () {
    
    await this.driver.pause(5000); 
    const createdContainer = await this.driver.$("div.error p");
    
    const isDisplayed = await createdContainer.isDisplayed();
    if (!isDisplayed) {
        throw new Error("El mensaje 'Created' no está visible en la página.");
    }

    const textContent = await createdContainer.getText();
    if (!textContent.includes("Note is too long.")) {
        throw new Error("El mensaje 'Note is too long.' no se encuentra en el texto del elemento.");
    }
});


Then('I should see Please Enter an Warning', async function () {
    
    await this.driver.pause(5000); 
    const createdContainer = await this.driver.$("div.error p");
    
    const isDisplayed = await createdContainer.isDisplayed();
    if (!isDisplayed) {
        throw new Error("El mensaje 'Created' no está visible en la página.");
    }

    const textContent = await createdContainer.getText();
    if (!textContent.includes("Warning.")) {
        throw new Error("El mensaje 'Warning.' no se encuentra en el texto del elemento.");
    }
});




//VERSIÓN DOS GHOST

When('I click Members v2', async function() {
    const membersPage = new MembersPage(this.driver);
    await membersPage.navigateToMembersV2();
});

When('I click New Members v2', async function() {
    const membersPage = new MembersPage(this.driver);
    await membersPage.clickNewMemberV2();
})

When('I click save member v2', async function() {
    const membersPage = new MembersPage(this.driver);
    await membersPage.clickSaveMemberV2();
})

Then('I should see the error message v2 {kraken-string}', async function (mensaje) {

    const membersPage = new MembersPage(this.driver);
    await membersPage.getMensajeV2(mensaje);
    
});

Then('I see the signup info message {kraken-string}', async function(mensaje) {

    const membersPage = new MembersPage(this.driver);
    await membersPage.getMensajeSignupV2(mensaje);
    
});

Then('I see the Delete member button', async function() {

    const membersPage = new MembersPage(this.driver);
    await membersPage.getVerificaButtonDelete();

});


//POOL DE DATOS

When('I fetch data from Mockaroo API {string}', async function (apiUrl) {
    
    const membersPage = new MembersPage(this.driver);
    await membersPage.getTestDataSet(apiUrl, 'GET');
    await membersPage.crearMemebers();  
});

When('I fetch data from Mockaroo API {string} not email', async function (apiUrl) {
    
    const membersPage = new MembersPage(this.driver);
    await membersPage.getTestDataSet(apiUrl, 'GET');
    await membersPage.crearMemebers('vacio');  
});

When('I fetch data from Mockaroo API {string} not allowed email', async function (apiUrl) {
    
    const membersPage = new MembersPage(this.driver);
    await membersPage.getTestDataSet(apiUrl, 'GET');
    await membersPage.crearMemebers('not allowed');  
});

When('I fetch data from Mockaroo API {string} not allowed max 500 note', async function (apiUrl) {
    
    const membersPage = new MembersPage(this.driver);
    await membersPage.getTestDataSet(apiUrl, 'GET');
    await membersPage.crearMemebers('','max 500');  
});

When('I fetch data from Mockaroo API {string} not allowed warning', async function (apiUrl) {
    
    const membersPage = new MembersPage(this.driver);
    await membersPage.getTestDataSet(apiUrl, 'GET');
    await membersPage.crearMemebers('','','warning');  
});

