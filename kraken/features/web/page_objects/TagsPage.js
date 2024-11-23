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


    async crearTags(email = '', note = '', name = '') {
        
        //lets grab a random index
        const randomIndex = Math.floor(Math.random() * this.testData.length);
    
        
        let nameNote;

        if ( name === "warning") 
            nameNote = this.testData[randomIndex].string_peligrosos;
        else
            nameNote = this.testData[randomIndex].name;



        let textNote;

        if ( note === "max 500") 
            textNote = this.testData[randomIndex].nota_max;
        else
            textNote = this.testData[randomIndex].descripción;

       
        try {
            
            await this.enterName(nameNote); 
            await this.enterMemberNote(textNote); 
        } catch (error) {
            console.error("Error en la creación de miembro:", error);
            throw error; 
        }
        
        
      }
}
module.exports = TagsPage;