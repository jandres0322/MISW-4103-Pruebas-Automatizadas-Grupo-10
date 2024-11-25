const { Given, When, Then } = require('@cucumber/cucumber');
const TagsPage = require('../page_objects/TagsPage');
const assert = require('assert');


When('I click on tags', async function(){
    let element = await this.driver.$('a[href="#/tags/"]');
    return await element.click();
});

When('I click on new tag', async function(){
    let element = await this.driver.$('a[href="#/tags/new/"] > span:nth-child(1)');
    return await element.click();
});

When('I click on tag name', async function(){
    let element = await this.driver.$('#tag-name');
    return await element.click();
});

When('I click on tag description', async function(){
    let element = await this.driver.$('#tag-description');
    return await element.click();
});

When('I click on save', async function(){
    let element = await this.driver.$('button.gh-btn');
    return await element.click();
});

Then('I should see tag {kraken-string}', async function(tagName){
    let selector = 'a[href="#/tags/' + tagName.toLowerCase() + '/"] > h3:nth-child(1)';
    let element = await this.driver.$(selector).getText();
    assert.equal(element,tagName);
});

Then('I should see the delete tag button', async function () {
    const element = await this.driver.$('[data-test-button="delete-tag"]');
    if (element) {
        // El botón existe y puedes interactuar con él
        return await element.click();
    } else {
        console.log("El botón de eliminar no está visible en la vista.");
    }
  
  });

When('I click on delete tag', async function(){
    let element = await this.driver.$('.gh-btn-red');
    return await element.click();
});

Then('I click on confirm delete tag', async function(){
    let element = await this.driver.$('.modal-footer > button:nth-child(2)');
    return await element.click();
})



Then('I should see Please Enter an mensaje {string}', async function (mensaje) {
    
    await this.driver.pause(5000); 
    const createdContainer = await this.driver.$("div.error p");
    
    const isDisplayed = await createdContainer.isDisplayed();
    if (!isDisplayed) {
        throw new Error("El mensaje 'Created' no está visible en la página.");
    }

    const textContent = await createdContainer.getText();
    if (!textContent.includes(mensaje)) {
        throw new Error("El mensaje  no se encuentra en el texto del elemento.");
    }
});




//POOL DE DATOS

When('I fetch data from Mockaroo API {string} tags', async function (apiUrl) {
    
    const tagsPage = new TagsPage(this.driver);
    await tagsPage.getTestDataSet(apiUrl, 'GET');
    await tagsPage.crearTags();  
});

When('I fetch data from Mockaroo API {string} tags not name', async function (apiUrl) {
    
    const tagsPage = new TagsPage(this.driver);
    await tagsPage.getTestDataSet(apiUrl, 'GET');
    await tagsPage.crearTags('vacio');  
});


When('I fetch data from Mockaroo API {string} tags not allowed max 500 descripcion', async function (apiUrl) {
    
    const tagsPage = new TagsPage(this.driver);
    await tagsPage.getTestDataSet(apiUrl, 'GET');
    await tagsPage.crearTags('','max 500');  
});

When('I fetch data from Mockaroo API {string} tags not allowed warning', async function (apiUrl) {
    
    const tagsPage = new TagsPage(this.driver);
    await tagsPage.getTestDataSet(apiUrl, 'GET');
    await tagsPage.crearTags('warning','');  
});

When('I fetch data from Mockaroo API {string} tags not allowed max 191 slug', async function (apiUrl) {
    
    const tagsPage = new TagsPage(this.driver);
    await tagsPage.getTestDataSet(apiUrl, 'GET');
    await tagsPage.crearTags('','','max 191');  
});

When('I click on expand button Meta Data', async function () {
    const tagsPage = new TagsPage(this.driver);
    await tagsPage.expandMetaData();
});

When('I fill the meta title input', async function () {
    const tagsPage = new TagsPage(this.driver);
    await tagsPage.enterMetaTitle();
});


When('I fill the meta description textarea', async function () {
    const tagsPage = new TagsPage(this.driver);
    await tagsPage.enterMetaDescripcion();
});

When('I fill the canonical URL input', async function () {
    const tagsPage = new TagsPage(this.driver);
    await tagsPage.enterMetaUrl();
});


When('I fetch data from Mockaroo API {string} tags meta data', async function (apiUrl) {
    
    const tagsPage = new TagsPage(this.driver);
    await tagsPage.getTestDataSet(apiUrl, 'GET');
    await tagsPage.crearTagsMetaData();  
});

When('I fetch data from Mockaroo API {string} tags meta data not allowed max 70 title', async function (apiUrl) {
    
    const tagsPage = new TagsPage(this.driver);
    await tagsPage.getTestDataSet(apiUrl, 'GET');
    await tagsPage.crearTagsMetaData('','','','max 70');  
});

When('I fetch data from Mockaroo API {string} tags meta data not allowed url', async function (apiUrl) {
    
    const tagsPage = new TagsPage(this.driver);
    await tagsPage.getTestDataSet(apiUrl, 'GET');
    await tagsPage.crearTagsMetaData('','','','','warning');  
});

When('I fetch data from Mockaroo API {string} tags meta data not allowed warning title', async function (apiUrl) {
    
    const tagsPage = new TagsPage(this.driver);
    await tagsPage.getTestDataSet(apiUrl, 'GET');
    await tagsPage.crearTagsMetaData('','','','warning','');  
});

When('I fetch data from Mockaroo API {string} tags meta data allowed vacio title', async function (apiUrl) {
    
    const tagsPage = new TagsPage(this.driver);
    await tagsPage.getTestDataSet(apiUrl, 'GET');
    await tagsPage.crearTagsMetaData('','','','vacio','');  
});

When('I fetch data from Mockaroo API {string} tags meta data allowed vacio url', async function (apiUrl) {
    
    const tagsPage = new TagsPage(this.driver);
    await tagsPage.getTestDataSet(apiUrl, 'GET');
    await tagsPage.crearTagsMetaData('','','','','vacio');  
});

When('I select the tag name {kraken-string} from the list', async function (name) {
    const tagsPage = new TagsPage(this.driver);
    await tagsPage.selectTagFromList(name);
});

When('I fetch data from Mockaroo API {string} tags edit vacio name', async function (apiUrl) {
    
    const tagsPage = new TagsPage(this.driver);
    await tagsPage.getTestDataSet(apiUrl, 'GET');
    await tagsPage.editarTagsMetaData('vacio','','','','');  
});

When('I select the first tag', async function () {
    // Seleccionar el primer tag en la lista
    const firstTag = await this.driver.$('li.gh-list-row.gh-tags-list-item a.gh-tag-list-title');
    
    // Hacer clic en el primer tag
    await firstTag.click();
});

When('I fetch data from Mockaroo API {string}  tags edit mayor 191 name', async function (apiUrl) {
    
    const tagsPage = new TagsPage(this.driver);
    await tagsPage.getTestDataSet(apiUrl, 'GET');
    await tagsPage.editarTagsMetaData('max 191','','','','');  
});

When('I fetch data from Mockaroo API {string} tags edit name ok', async function (apiUrl) {
    
    const tagsPage = new TagsPage(this.driver);
    await tagsPage.getTestDataSet(apiUrl, 'GET');
    await tagsPage.editarTagsMetaData('','','','','');  
});


When('I fetch data from Mockaroo API {string} tags edit mayor 191 slug', async function (apiUrl) {
    
    const tagsPage = new TagsPage(this.driver);
    await tagsPage.getTestDataSet(apiUrl, 'GET');
    await tagsPage.editarTagsMetaData('otro','','max 191','','');  
});

When('I fetch data from Mockaroo API {string} tags edit mayor 500 descrpcion', async function (apiUrl) {
    
    const tagsPage = new TagsPage(this.driver);
    await tagsPage.getTestDataSet(apiUrl, 'GET');
    await tagsPage.editarTagsMetaData('otro','max 500','','','');  
});


When('I fetch data from Mockaroo API {string} tags meta data edit vacio title', async function (apiUrl) {
    
    const tagsPage = new TagsPage(this.driver);
    await tagsPage.getTestDataSet(apiUrl, 'GET');
    await tagsPage.editarTagsMetaData('otro','otro','','vacio','');  
});


When('I fetch data from Mockaroo API {string} tags meta data edit not allowed max 300 meta title', async function (apiUrl) {
    
    const tagsPage = new TagsPage(this.driver);
    await tagsPage.getTestDataSet(apiUrl, 'GET');
    await tagsPage.editarTagsMetaData('otro','otro','','max 300','');  
});

When('I fetch data from Mockaroo API {string} tags meta data edit not allowed max 500 meta descripcion', async function (apiUrl) {
    
    const tagsPage = new TagsPage(this.driver);
    await tagsPage.getTestDataSet(apiUrl, 'GET');
    await tagsPage.editarTagsMetaData('otro','otro','','','','max 500');  
});

When('I fetch data from Mockaroo API {string} tags meta data edit vacio meta descripcion', async function (apiUrl) {
    
    const tagsPage = new TagsPage(this.driver);
    await tagsPage.getTestDataSet(apiUrl, 'GET');
    await tagsPage.editarTagsMetaData('otro','otro','','','','vacio');  
});


When('I fetch data from Mockaroo API {string} tags meta data edit vacio meta url', async function (apiUrl) {
    
    const tagsPage = new TagsPage(this.driver);
    await tagsPage.getTestDataSet(apiUrl, 'GET');
    await tagsPage.editarTagsMetaData('otro','otro','','','vacio','');  
});


When('I fetch data from Mockaroo API {string} tags meta data edit url not valid meta url', async function (apiUrl) {
    
    const tagsPage = new TagsPage(this.driver);
    await tagsPage.getTestDataSet(apiUrl, 'GET');
    await tagsPage.editarTagsMetaData('otro','otro','','','not valid','');  
});

When('I fetch data from Mockaroo API {string} tags meta data edit url not valid meta url long', async function (apiUrl) {
    
    const tagsPage = new TagsPage(this.driver);
    await tagsPage.getTestDataSet(apiUrl, 'GET');
    await tagsPage.editarTagsMetaData('otro','otro','','','long','');  
});

When('I fetch data from Mockaroo API {string} tags meta data edit url valid', async function (apiUrl) {
    
    const tagsPage = new TagsPage(this.driver);
    await tagsPage.getTestDataSet(apiUrl, 'GET');
    await tagsPage.editarTagsMetaData('otro','otro','','','','');  
});


When('I fetch data from faker aleatoreo tags', async function () {
    
    const tagsPage = new TagsPage(this.driver);
    await tagsPage.crearTagsFaker();  
});

When('I fetch data from faker aleatoreo tags not name', async function () {
    
    const tagsPage = new TagsPage(this.driver);
    await tagsPage.crearTagsFaker('vacio');  
});


When('I fetch data from faker aleatoreo tags slug vacio', async function () {
    
    const tagsPage = new TagsPage(this.driver);
    await tagsPage.crearTagsFaker('','','vacio');  
});

When('I fetch data from faker aleatoreo tags note vacio', async function () {
    
    const tagsPage = new TagsPage(this.driver);
    await tagsPage.crearTagsFaker('','vacio','');  
});