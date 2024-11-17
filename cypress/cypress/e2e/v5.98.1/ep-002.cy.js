const registerScreen = require("../../support/screens/register-screen");
const MakeScreenShot = require("../../support/utils/make-screenshot");

describe("EP-002: Crear cuenta en Ghost con correo electronico invalido", () => {
  beforeEach(() => {
    cy.log("Ingresando a Ghost");
    cy.visit(Cypress.env("apiUrl"));
  });

  it("Ejecución", () => {
    const makeScreenShot = new MakeScreenShot(Cypress.env("ghostVersionReleaseCandidate"), Cypress.currentTest.titlePath);

    cy.fixture("user-register").then((data) => {

      cy.log("WHEN: Ingresando datos de usuario en el formulario de registro");
      makeScreenShot.execute("beforeRegister");
      registerScreen.enterSiteTitle(data.userInvalidateEmail.site);
      
      registerScreen.enterFullName(data.userInvalidateEmail.name);
      registerScreen.enterEmailAddress(data.userInvalidateEmail.email);
      registerScreen.enterPassword(data.userInvalidateEmail.password);
      makeScreenShot.execute("fillForm")
      registerScreen.clickCreateAccount();

      cy.log("THEN: Validando mensaje de error en el campo de email");
      registerScreen.validateErrorPassword(data.userInvalidateEmail.errorMessage);
      registerScreen.validateErrorMain(data.userInvalidateEmail.errorMessageMain);
      makeScreenShot.execute("validateError");
    });
  });
});
