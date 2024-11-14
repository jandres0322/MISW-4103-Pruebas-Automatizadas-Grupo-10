const assert = require('assert');
class MembersPage {
    constructor(driver) {
        this.driver = driver;
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
        const element = await this.driver.$('#member-name');
        await element.setValue(name);
    }

    async enterEmail(email) {
        const element = await this.driver.$('#member-email');
        await element.setValue(email);
    }

    async enterNote(note) {
        const element = await this.driver.$('#member-note');
        await element.setValue(note);
    }

    async clickSaveMember() {
        const element = await this.driver.$('[data-test-button="save"]');
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
}
module.exports = MembersPage;
