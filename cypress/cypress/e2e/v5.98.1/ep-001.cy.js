const registerScreen = require("../../support/screens/register-screen");
const MakeScreenShot = require("../../support/utils/make-screenshot");

describe("EP-001: Crear cuenta en Ghost con campos del registro vacíos", () => {
  beforeEach(() => {
    cy.log("Ingresando a Ghost");
    cy.visit(Cypress.env("apiUrl"));
  });

  it("Ejecución", () => {
    const makeScreenShot = new MakeScreenShot(Cypress.env("ghostVersionReleaseCandidate"), Cypress.currentTest.titlePath);
    cy.log("GIVEN: Cargando datos de usuario")
    cy.fixture("user-register").then((data) => {
      makeScreenShot.execute("beforeRegister");
      cy.log("WHEN: Ingresando datos de usuario en el formulario de registro");
      
      registerScreen.clickCreateAccount();
      makeScreenShot.execute("fillForm")
      cy.log("THEN: Validando mensaje de error en el campo de email");
      registerScreen.validateErrorMain(data.userEmptyFields.errorMessageMain);
      makeScreenShot.execute("validateErrorMain");
    });
  });
});
