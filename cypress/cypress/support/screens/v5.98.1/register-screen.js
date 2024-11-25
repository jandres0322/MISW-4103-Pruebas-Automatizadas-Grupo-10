class RegisterScreen {

  elements = {
    siteTitleInput: () => cy.get("#blog-title"),
    fullNameInput: () => cy.get("#name"),
    emailAddressInput: () => cy.get("#email"),
    passwordInput: () => cy.get("#password"),
    errorMessagePassword: () => cy.get('.error > .response'),
    errorMain: () => cy.get(".main-error"),
    createAccountButton: () => cy.get("button[data-test-button='setup']")
  }

  enterSiteTitle(siteTitle) {
    this.elements.siteTitleInput().type(siteTitle ?? " ");
  }

  enterFullName(fullName) {
    this.elements.fullNameInput().type(fullName ?? " ");
  }

  enterEmailAddress(emailAddress) {
    this.elements.emailAddressInput().type(emailAddress ?? " ");
  }

  enterPassword(password) {
    this.elements.passwordInput().type(password ?? " ");
  }

  validateErrorPassword() {
    const errorMessage = "Password must be at least 10 characters long.";
    this.elements.errorMessagePassword().should('contain.text', errorMessage);
  }

  validateErrorMain() {
    this.elements.errorMain().should('contain.text', 'Please fill out every field correctly to set up your site.');
  }

  clickCreateAccount() {
    this.elements.createAccountButton().click();
  }

  cleanForm() {
    this.elements.siteTitleInput().clear();
    this.elements.fullNameInput().clear();
    this.elements.emailAddressInput().clear();
    this.elements.passwordInput().clear();
  }
}

module.exports = new RegisterScreen();