const { Given, When, Then } = require('@cucumber/cucumber');
const {PostsPage} = require('../page_objects/PostsPage');
const assert = require('assert');
const PagesPage = require('kraken-node/bin/features/web/page_objects/PagesPage');

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

When ('I click on unplash', async function(){
    const postsPage = new PagesPage(this.driver);
    await postsPage.clickOnFeatureImage();
});

When('I click on load image', async function(){
    const postsPage = new PagesPage(this.driver);
    await postsPage.loadImage();
});

When('I fill the search photo field', async function(){
    const postsPage = new PagesPage(this.driver);
    await postsPage.searchImage();
});

When ('I click on Insert Image', async function(){
    const postsPage = new PagesPage(this.driver);
    await postsPage.clickOnInsertImage();
});

When ('I navigate to Posts', async function(){
    const postsPage = new PagesPage(this.driver);
    await postsPage.navigateToPosts();
});

When ('I click in Posts Editor', async function(){
    const postsPage = new PagesPage(this.driver);
    await postsPage.clickPostsEditor();
});

When ('I click in Posts Settings', async function(){
    const postsPage = new PagesPage(this.driver);
    await postsPage.clickPostsSettings();
});

When ('I click in Tags ComboBox', async function(){
    const postsPage = new PagesPage(this.driver);
    await postsPage.clickTagComboBox();
});

When ('I select a tag', async function(){
    const postsPage = new PagesPage(this.driver);
    await postsPage.selectTag();
});

