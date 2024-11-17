class LoginScreen {

  elements = {
    emailInput: () => cy.get("#identification"),
    passwordInput: () => cy.get("#password"),
    submitButton: () => cy.get('#ember5 > span')
  }

  enterEmail(email) {
    this.elements.emailInput().type(email);
  }

  enterPassword(password) {
    this.elements.passwordInput().type(password);
  }

  clickSubmit() {
    this.elements.submitButton().click();
  }
}

module.exports = new LoginScreen();