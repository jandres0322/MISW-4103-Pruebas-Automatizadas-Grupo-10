const assert = require('assert');

class TagsPage {
    constructor(driver) {
        this.driver = driver;
        this.testData = [];
    }

    async getTestDataSet(dataUrl, method = 'GET') {
        const response = await fetch(dataUrl, { method: method });
        this.testData = await response.json();
    }

    async enterName(name) {
        let element = await this.driver.$('#tag-name');
        await element.waitForDisplayed(15000);
        await element.setValue(name);
    }

    async slugName(name) {
        let element = await this.driver.$('#tag-slug');
        await element.waitForDisplayed(15000);
        await element.setValue(name);
    }

    async enterMemberNote(note) {
        try {
            const element = await this.driver.$('[data-test-input="tag-description"]');
    
            await element.waitForDisplayed(15000);
            await element.click();
            await this.driver.pause(2000); 
            await element.setValue(note);
            const value = await element.getValue();
            await this.driver.pause(2000); 
    
            if (value !== note) {
                throw new Error("El valor no se reflejó correctamente en el textarea.");
            }
    
            console.log("Nota introducida correctamente");
        } catch (error) {
            console.error("Error al introducir la nota:", error);
            throw error;
        }
    }


    async crearTags(name = '', descripcion = '', slug = '') {
        
        //lets grab a random index
        const randomIndex = Math.floor(Math.random() * this.testData.length);
    
        
        let nameNote;

        if ( name === "vacio" || name === "warning") 
            nameNote = name === "vacio" ? "" :  this.testData[randomIndex].string_peligrosos;
        else
            nameNote = this.testData[randomIndex].name;


        let textNote;

        if ( descripcion === "max 500") 
            textNote = this.testData[randomIndex].descripción_max;
        else
            textNote = this.testData[randomIndex].descripción;

        let slugNote;

            if ( slug === "max 191") 
                slugNote = this.testData[randomIndex].descripción_max;
            else
                slugNote = this.testData[randomIndex].slug;
    
        try {
            
            await this.enterName(nameNote); 
            await this.slugName(slugNote); 
            await this.enterMemberNote(textNote); 
        } catch (error) {
            console.error("Error en la creación de tags:", error);
            throw error; 
        }
        
        
    }

    async getMensaje(mensaje) {
        const errorMessageElement = await this.driver.$('.error .response');
        await errorMessageElement.waitForDisplayed({ timeout: 10000 });
    
        const errorMessageText = await errorMessageElement.getText();
        assert.strictEqual(errorMessageText, mensaje, 'El mensaje de error no es el esperado.');
        
    }

    async expandMetaData() {

        let element = await this.driver.$('.gh-btn.gh-btn-expand');
        await element.click();
    }

    async enterMetaTitle(titulo) {
        
        let element = await this.driver.$('#meta-title');
        await element.waitForDisplayed(15000);
        await element.setValue(titulo);
    }

    async enterMetaDescripcion(descripcion) {

        let element = await this.driver.$('#meta-description');
        await element.waitForDisplayed(15000);
        await element.setValue(descripcion);
    }

    async enterMetaUrl(url) {
        let element = await this.driver.$('#canonical-url');
        await element.waitForDisplayed(15000);
        await element.setValue(url);
    }


    async crearTagsMetaData(name = '', descripcion = '', slug = '', title = '', url = '') {
        
        //lets grab a random index
        const randomIndex = Math.floor(Math.random() * this.testData.length);
    
        
        let nameNote;

        if ( name === "vacio" || name === "warning") 
            nameNote = name === "vacio" ? "" :  this.testData[randomIndex].string_peligrosos;
        else
            nameNote = this.testData[randomIndex].name;


        let textNote;

        if ( descripcion === "max 500") 
            textNote = this.testData[randomIndex].descripción_max;
        else
            textNote = this.testData[randomIndex].descripción;

        let slugNote;

            if ( slug === "max 191") 
                slugNote = this.testData[randomIndex].descripción_max;
            else
                slugNote = this.testData[randomIndex].slug;

        let titleMeta;
        if ( title === "max 70" || title === "warning") 
            titleMeta = title === "max 70" ? this.testData[randomIndex].descripción_max :  this.testData[randomIndex].string_peligrosos; 
        else
            titleMeta = this.testData[randomIndex].titulo_meta;

        
        let descripcionMeta;
        descripcionMeta = this.testData[randomIndex].descripcion_meta;


        let urlMeta;

        if ( url === "warning") 
            urlMeta = this.testData[randomIndex].descripción;
        else
            urlMeta = this.testData[randomIndex].url;

        
    
        try {
            
            await this.enterName(nameNote); 
            await this.slugName(slugNote); 
            await this.enterMemberNote(textNote); 
            await this.enterMetaTitle(titleMeta); 
            await this.enterMetaDescripcion(descripcionMeta); 
            await this.enterMetaUrl(urlMeta); 
        } catch (error) {
            console.error("Error en la creación de tags:", error);
            throw error; 
        }
        
        
    }



}
module.exports = TagsPage;