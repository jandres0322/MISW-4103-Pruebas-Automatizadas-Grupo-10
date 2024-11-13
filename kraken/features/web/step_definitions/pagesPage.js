const { Given, When, Then } = require('@cucumber/cucumber');

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

When ('I click publish', async function(){
    const pagesPage  = new PagesPage(this.driver);
    await pagesPage.clickPublish()
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

Then ('I should see copy link button', async function(){
    const pagesPage  = new PagesPage(this.driver);
    const isDisplayed = await pagesPage.isDisplayedCopylink();
    if (isDisplayed==false) {
        throw new Error("El mensaje 'Boom! It's out there.' deberia estar visible en la página.");
    }
})


