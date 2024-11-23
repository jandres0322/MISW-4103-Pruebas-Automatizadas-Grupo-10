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


    async crearTags(name = '', descripcion = '') {
        
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

       
        try {
            
            await this.enterName(nameNote); 
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
}
module.exports = TagsPage;