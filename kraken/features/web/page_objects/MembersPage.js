const assert = require('assert');
class MembersPage {
    constructor(driver) {
        this.driver = driver;
        this.testData = [];
    }
    

    async navigateToMembers() {
        const element = await this.driver.$('[data-test-nav="members"]');
        await element.click();
    }

    async clickNewMember() {
        const element = await this.driver.$('[data-test-new-member-button="true"]');
        await element.click();
    }

    async enterName(name) {
        console.log("EEEEENTRADNO NAMMEMEEMEMEMME:", name);
        const element = await this.driver.$('#member-name');
        await element.waitForDisplayed(15000);
        await element.setValue("HOLALALALL");
    }

    async enterEmail(email) {
        console.log("EEEEENTRADNO correrrooo:", email);
        const element = await this.driver.$('#member-email');
        await element.waitForDisplayed(15000);
        await element.setValue(email);
    }

    async enterNote(note) {
        const element = await this.driver.$('#member-note');
        await element.setValue(note);
    }

    async clickSaveMember() {
        const element = await this.driver.$('[data-test-button="save"]');
        await element.waitForDisplayed(15000);
        await element.click();
    }

    async getMensaje(mensaje) {
        const errorMessageElement = await this.driver.$('.error .response');
        await errorMessageElement.waitForDisplayed({ timeout: 10000 });
    
        const errorMessageText = await errorMessageElement.getText();
        assert.strictEqual(errorMessageText, mensaje, 'El mensaje de error no es el esperado.');
        
    }

    

    
    //VERSIÓN DOS GHOST

    async navigateToMembersV2() {
        const element = await this.driver.$('a[href="#/members/"]');
        await element.click();
    }

    async clickNewMemberV2() {
        const element = await this.driver.$('a[href="#/members/new/"]');
        await element.click();
    }

    async clickSaveMemberV2() {
        let saveButton = await this.driver.$('button.gh-btn.gh-btn-primary.gh-btn-icon');
    
    // Verifica que el botón contenga el texto "Save" para asegurarse de que es el correcto
        let buttonText = await saveButton.getText();
        if (buttonText === "Save") {
            await saveButton.click();
        } else {
            throw new Error("Botón 'Save' no encontrado");
        }
    }

    async getMensajeV2(mensaje) {

        const mensajeErrorElemento = await this.driver.$('div.form-group.error p.response');

        // Obtiene el texto del elemento
        let errorMessage = await mensajeErrorElemento.getText();
        console.log("Mensaje de error obtenido:", errorMessage);
        // Compara el texto obtenido con el mensaje esperado
        assert.strictEqual(errorMessage, mensaje, 'El mensaje de error no es el esperado.');
    }

    async getMensajeSignupV2(mensaje) {

        // Selecciona el elemento por su clase y obtiene el texto
        const errorMessage = await this.driver.$('.gh-main-section-header.small.bn').getText();
        console.log("Mensaje de error obtenido ----------:", errorMessage);
        // Verifica que el texto sea el esperado (puedes ajustar "Expected Message" a tu necesidad)
        assert.strictEqual(errorMessage, mensaje, 'El mensaje de error no es el esperado.');
    }

    async getVerificaButtonDelete() {

        // Busca el botón por su clase
        const deleteButton = await this.driver.$('.gh-btn.gh-btn-red.gh-btn-icon');
        
        // Verifica si el botón está en la vista
        const isDisplayed = await deleteButton.isDisplayed();
        assert.strictEqual(isDisplayed, true, "El botón 'Delete member' no está visible en la vista");
    }

    async getTestDataSet(dataUrl, method = 'GET') {
        const response = await fetch(dataUrl, { method: method });
        this.testData = await response.json();
    }

    async crearMemebers(email = '', note = '', name = '') {
        
        //lets grab a random index
        const randomIndex = Math.floor(Math.random() * this.testData.length);
    
        
        let nameNote;

        if ( name === "warning") 
            nameNote = this.testData[randomIndex].string_peligrosos;
        else
            nameNote = this.testData[randomIndex].first_name;


        let emailNote;

        if ( note === "max 500") 
            emailNote = this.testData[randomIndex].nota_max;
        else
            emailNote = this.testData[randomIndex].nota;


        let emailToUse;

        if (email === "vacio" || email === "not allowed") {
            emailToUse = email === "vacio" ? "" : `${this.testData[randomIndex].first_name}@`;
        } else {
            emailToUse = this.testData[randomIndex].email;
        }

       
        try {
            
            await this.enterName(nameNote); 
            await this.enterEmail(emailToUse); 
            await this.enterMemberNote(emailNote); 
        } catch (error) {
            console.error("Error en la creación de miembro:", error);
            throw error; 
        }
        
        
      }


    async enterName(name) {
        try {
            console.log("Intentando introducir el nombre:", name);
            const element = await this.driver.$('[data-test-input="member-name"]');
            console.log("Elemento encontrado:", !!element);
            await element.waitForDisplayed(15000);
            await element.click();
            await element.setValue(name);
            await this.driver.pause(2000); 
            console.log("Nombre introducido correctamente");
        } catch (error) {
            console.error("Error al introducir el nombre:", error);
        }
    }
    
    async enterEmail(email) {
        try {
            console.log("Intentando introducir el correo:", email);
            const element = await this.driver.$('#member-email');
            console.log("Elemento encontrado:", !!element);
            await element.waitForDisplayed(15000);
            await element.click();
            await element.setValue(email);
            await this.driver.pause(2000); 
            console.log("Correo introducido correctamente");
        } catch (error) {
            console.error("Error al introducir el correo:", error);
        }
    }

    async enterMemberNote(note) {
        try {
            console.log("Intentando introducir la nota:", note);
            const element = await this.driver.$('[data-test-input="member-note"]');
    
            
            await element.waitForDisplayed(15000);
            await element.click();
            await this.driver.pause(2000); 
            await element.setValue(note);
            const value = await element.getValue();
            await this.driver.pause(2000); 

            console.log("Valor en el textarea después de setValue:", value);
    
            if (value !== note) {
                throw new Error("El valor no se reflejó correctamente en el textarea.");
            }
    
            console.log("Nota introducida correctamente");
        } catch (error) {
            console.error("Error al introducir la nota:", error);
            throw error;
        }
    }

    
    
}
module.exports = MembersPage;
