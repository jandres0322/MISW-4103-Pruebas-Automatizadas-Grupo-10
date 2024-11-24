const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../page_objects/LoginPage');
const UpdateProfile = require('../page_objects/UpdateProfile');
const LoadPage = require('../page_objects/LoadPage');
const assert = require('assert');
const MembersPage = require('../page_objects/MembersPage');




let startTime
let endTime

When('I click avatar', async function () {
    const updateProfile = new UpdateProfile(this.driver);
    await updateProfile.clickAvatar();
})

When('I click Your Profile', async function(){
    const updateProfile = new UpdateProfile(this.driver);
    await updateProfile.clickProfile();
})

When ('I clean Full Name field {kraken-string}', async function (limpiarNombre) {
    const updateProfile = new UpdateProfile(this.driver);
    await updateProfile.cleanFullName(limpiarNombre);
})

When ('I enter Full Name {kraken-string}', async function(fullName){
    const updateProfile = new UpdateProfile(this.driver);
    await updateProfile.enterFullName(fullName);
})

When('I click save', async function(){
    const updateProfile = new UpdateProfile(this.driver);
    await updateProfile.clickSave();
})

Then('I can see the Name is required tag', async function(){
    await this.driver.pause(5000); 
    const createdContainer = await this.driver.$("span.mt-1");
    
    const isDisplayed = await createdContainer.isDisplayed();
    if (!isDisplayed) {
        throw new Error("El mensaje 'Name is required' no está visible en la página.");
    }
})

When('I start the startTime', async function(){
    startTime = Date.now();
})

When('I take the endTime', async function(){
    endTime = Date.now()
})



Then('I should see charging time should be less than 3 seconds', async function () {
    // Calcula el tiempo de carga

    const loadTime = (endTime - startTime) / 1000; // Convertir a segundos
  
    // Verifica que el tiempo de carga sea menor a 3 segundos
    assert(loadTime<3, 'I should see charging time should be less than 3 seconds');   
  });


When ('I click Members Configuration', async function(){
    const membersPage = new MembersPage(this.driver);
    await membersPage.navigateToConfigurationsMembers();
})

When ('I click Import Members',async function(){
    const membersPage = new MembersPage(this.driver);
    await membersPage.navigateToImportMembers();
})

When ('I click Load file',async function(){
    const membersPage = new MembersPage(this.driver);
    await membersPage.launchLoadZone();
})


Then ('I should not see copy link button', async function(){
    const pagesPage  = new PagesPage(this.driver);
    const isDisplayed = await pagesPage.isDisplayedCopylink();
    if (isDisplayed) {
        throw new Error("El mensaje 'Boom! It's out there.' no deberia estar visible en la página.");
    }
})






