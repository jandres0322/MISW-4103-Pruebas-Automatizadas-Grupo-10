class CreateMemberScreen {

  elements = {
    nameMemberInput: () => cy.get('#member-name'),
    emailMemberInput: () => cy.get('#member-email'),
    noteMemberInput: () => cy.get('#member-note'),
    saveMemberButton: () => cy.get('.view-actions > button[data-test-button="save"]'),
    messageError: () => cy.get('.error > .response'),
  }

  enterNameMember(name) {
    this.elements.nameMemberInput().type(name);
  }

  enterEmailMember(email) {
    this.elements.emailMemberInput().type(email);
  }

  enterNoteMember(note) {
    this.elements.noteMemberInput().type(note);
  }

  clickSaveMember() {
    this.elements.saveMemberButton().click();
  }

  validateMessageError(message) {
    this.elements.messageError().should("contain.text", message);
  }

  validateButtonError() {
    this.elements.saveMemberButton().should("contain.text", "Retry");
  }
}

module.exports = new CreateMemberScreen();