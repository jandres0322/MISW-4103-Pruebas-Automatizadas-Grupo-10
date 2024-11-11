const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

When('I click on create post', async function(){
    let element = await this.driver.$('a[href="#/editor/post/"]');
    return await element.click();
});

When('I click on write title', async function(){
    let element = await this.driver.$('textarea.gh-editor-title');
    return await element.click();
});

Then('I click on publish button', async function(){
    let element = await this.driver.$('.gh-publishmenu-button');
    return await element.click();
});

Then('I click on div Begin', async function () {
    
    const boton = await this.driver.$('[data-kg="editor"]');
    await boton.waitForDisplayed({ timeout: 5000 });
    await boton.click();
});

Then('I click on publish', async function(){
    const element = await this.driver.$('[data-test-button="publish-flow"]');
    return await element.click();
});

Then('I click on publish now', async function(){
    const element = await this.driver.$('[data-test-button="confirm-publish"]');
    return await element.click();
});


Then('I click on preview', async function(){
    const element = await this.driver.$('[data-test-button="continue"]');
    return await element.click();
});

