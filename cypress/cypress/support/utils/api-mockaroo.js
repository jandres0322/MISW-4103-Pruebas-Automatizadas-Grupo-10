const baseUrlMockaroo = Cypress.env("apirUrlMockaroo");
const apiKeyMockaroo = Cypress.env("apiKeyMockaroo");


export class ApiMockaroo {
  
  static dataWrongRegisterUser() {
    return cy.request({
      method: "GET",
      url: `${baseUrlMockaroo}/user_register.json?key=${apiKeyMockaroo}`,
    }).then((response) => {
      return response.body;
    });
  }
}