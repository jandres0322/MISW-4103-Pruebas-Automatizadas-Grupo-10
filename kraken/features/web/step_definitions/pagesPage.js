const { Given, When, Then } = require('@cucumber/cucumber');
const PagesPage = require('../page_objects/PagesPage');

When ('I click pages', async function(){
    const pagesPage  = new PagesPage(this.driver);
    await pagesPage.navigateToPages();
})

When ('I click New Page', async function(){
    const pagesPage  = new PagesPage(this.driver);
    await pagesPage.clickOnNewPage()
})

When ('I write the page', async function(){
    const pagesPage  = new PagesPage(this.driver);
    await pagesPage.writePage()
})

When ('I write the page v2', async function(){
    const pagesPage  = new PagesPage(this.driver);
    await pagesPage.writePageV2()
})

When ('I click publish', async function(){
    const pagesPage  = new PagesPage(this.driver);
    await pagesPage.clickPublish()
})

When ('I click publish v2', async function(){
    const pagesPage  = new PagesPage(this.driver);
    await pagesPage.clickPublishv2Final()
})

When ('I try to publish a page without a title', async function(){
    const pagesPage  = new PagesPage(this.driver);
    await pagesPage.clickPublish()
})

When ('I try to publish a page without a title v2', async function(){
    const pagesPage  = new PagesPage(this.driver);
    await pagesPage.clickPublishV2()
})

When ('I click continue', async function(){
    const pagesPage  = new PagesPage(this.driver);
    await pagesPage.clickContinue()
})

When ('I click right now', async function(){
    const pagesPage  = new PagesPage(this.driver);
    await pagesPage.clickRightNow()
})

Then ('I should not see copy link button', async function(){
    const pagesPage  = new PagesPage(this.driver);
    const isDisplayed = await pagesPage.isDisplayedCopylink();
    if (isDisplayed) {
        throw new Error("El mensaje 'Boom! It's out there.' no deberia estar visible en la página.");
    }
})

When ('I write title', async function(){
    const pagesPage  = new PagesPage(this.driver);
    await pagesPage.writeTitle()
})

When ('I write title v2', async function(){
    const pagesPage  = new PagesPage(this.driver);
    await pagesPage.writeTitleV2()
})

Then ('I should see copy link button', async function(){
    const pagesPage  = new PagesPage(this.driver);
    const isDisplayed = await pagesPage.isDisplayedCopylink();
    if (isDisplayed==false) {
        throw new Error("El mensaje 'Boom! It's out there.' deberia estar visible en la página.");
    }
})

Then('I should see the notification article', async function () {
    // Busca el <aside> que contiene las notificaciones
    const aside = await this.driver.$('aside.gh-notifications');
   
    const asideExists = await aside.isExisting();
    if (!asideExists) {
        throw new Error('El contenedor de notificaciones no existe en el DOM.');
    }

    const article = await aside.$('article.gh-notification');

    const articleExists = await article.isExisting();
    if (!articleExists) {
        throw new Error('El artículo con la notificación no existe en el DOM.');
    }

    const isVisible = await article.isDisplayed();
    if (!isVisible) {
        throw new Error('El artículo con la notificación no está visible en la página.');
    }

    console.log('El artículo con la notificación está presente y visible.');
});


When('I write the post title', async function(){
    const postsPages = new PagesPage(this.driver);
    await postsPages.writeTitlePost();
})

When('I write the body of the post', async function(){
    const postsPages = new PagesPage(this.driver);
    await postsPages.writePost();
})


