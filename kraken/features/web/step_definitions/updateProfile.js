const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

When('I click avatar', async function () {
    const updateProfile = new UpdateProfile(this.driver);
    await updateProfile.clickAvatar();
})

When('I click Your Profile', async function(){
    const updateProfile = new UpdateProfile(this.driver);
    await updateProfile.clickProfile();
})

When ('I clean Full Name field', async function () {
    const updateProfile = new UpdateProfile(this.driver);
    await updateProfile.cleanFullName();
})

When ('I enter Full Name {kraken-string}', async function(fullName){
    const updateProfile = new UpdateProfile(this.driver);
    await updateProfile.enterFullName(fullName);
})

When('I click save', async function(){
    const updateProfile = new UpdateProfile(this.driver);
    await updateProfile.clickSave();
})