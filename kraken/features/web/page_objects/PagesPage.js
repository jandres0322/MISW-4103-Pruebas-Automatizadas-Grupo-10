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

    async writePageV2(){
        const element = await this.driver.$('div.koenig-editor__editor');
        await element.setValue("You're currently loading the source file in the src directory instead of the built file in the dist directory (you can see what the intended distributed file is here). This means that you're using the native source code in an unaltered/unbundled state, leading to the following error: Uncaught SyntaxError: Cannot use import statement outside a module. This should be fixed by using the bundled version since the package is using rollup to create a bundle."+
        "The reason you're getting the Uncaught ReferenceError: ms is not defined error is because modules are scoped, and since youre loading the library using native modules, ms is not in the global scope and is therefore not accessible in the following script tag."+"It looks like you should be able to load the dist version of this file to have ms defined on the window. Check out this example from the library author to see an example of how this can be done.")
    }

    async clickPublish(){
        const element = await this.driver.$('button.gh-publish-trigger');
        await element.click()
    }

    async clickPublishV2(){
        const element = await this.driver.$('div.gh-publishmenu-trigger');
        await element.click()
    }

    async clickPublishv2Final(){
        const element = await this.driver.$('button.gh-publishmenu-button');
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

    async writeTitleV2(){
        const element = await this.driver.$('textarea.ember-text-area');
        await element.setValue("Titulo de la página de Prueba")
    }

    async writeTitlePost(){
        const element = await this.driver.$('textarea.ember-text-area');
        await element.setValue("Prueba Automatizada");
    }

    async writePost(){
        const element = await this.driver.$('div.kg-prose');
        await element.setValue( "Las pruebas automatizadas consisten en la aplicación de herramientas de software"+
                                " para automatizar el proceso manual de revisión y validación de un producto de "+
                                "software que lleva a cabo una persona. Ahora, la mayoría de los proyectos de software "+
                                "ágiles y de DevOps modernos incluyen pruebas automatizadas desde el principio; "+
                                "sin embargo, para apreciar plenamente el valor de dichas pruebas, hay que saber cómo"+
                                "era la vida antes de que se adoptaran de forma generalizada.")
    }

    async clickOnFeatureImage(){
        const element = await this.driver.$('button.gh-editor-feature-image-unsplash')
        await element.click();
    }

    async clickOnInsertImage(){
        const element = await this.driver.$('div.gh-unsplash-photo-footer a.gh-unsplash-button')
        await element.click()
    }

    async loadImage(){
        const nuevoSrc = 'features\web\auto.png';
        const element = await this.driver.$('div.gh-editor-feature-image img');
        //await element.setAttribute('src',nuevoSrc);
        await element.executeScript(
            "document.querySelector('img').setAttribute('src', arguments[0]);",
            nuevoSrc
          );
    }   

    async searchImage(){
        const element = await this.driver.$('input.gh-unsplash-search');
        await element.setValue("Diego Maradona")
    }
}

module.exports = PagesPage;