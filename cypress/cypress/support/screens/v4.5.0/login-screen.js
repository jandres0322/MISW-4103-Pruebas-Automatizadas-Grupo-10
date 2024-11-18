class LoginScreen {

  elements = {
    emailInput: () => cy.get(".email"),
    passwordInput: () => cy.get(".password"),
    submitButton: () => cy.get('.login')
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