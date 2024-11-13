class PagesPage{
    constructor(driver) {
        this.driver = driver;
    }

    async navigateToPages(){
        const element = await this.driver.$('a[href="#/pages/"]');
        await element.click();
    }

    async clickOnNewPage(){
        const element = await this.driver.$('a[href="#/editor/page/"]');
        await element.click()
    }

    async writePage(){
        const element = await this.driver.$('div.kg-prose');
        await element.setValue("You're currently loading the source file in the src directory instead of the built file in the dist directory (you can see what the intended distributed file is here). This means that you're using the native source code in an unaltered/unbundled state, leading to the following error: Uncaught SyntaxError: Cannot use import statement outside a module. This should be fixed by using the bundled version since the package is using rollup to create a bundle."+
        "The reason you're getting the Uncaught ReferenceError: ms is not defined error is because modules are scoped, and since youre loading the library using native modules, ms is not in the global scope and is therefore not accessible in the following script tag."+"It looks like you should be able to load the dist version of this file to have ms defined on the window. Check out this example from the library author to see an example of how this can be done.")
    }

    async clickPublish(){
        const element = await this.driver.$('button.gh-publish-trigger');
        await element.click()
    }

    async clickContinue(){
        const element = await this.driver.$('button.gh-btn-black');
        await element.click()
    }

    async clickRightNow(){
        const element = await this.driver.$('button.ember-view');
        await element.click()
    }

    async isDisplayedCopylink(){
        const element = await this.driver.$('button.copy-link');
        const isDisplayed = await element.isDisplayed();
        return isDisplayed
    }

    async writeTitle(){
        const element = await this.driver.$('textarea.ember-text-area');
        await element.setValue("Titulo de la página de Prueba")
    }
}

module.exports = PagesPage;