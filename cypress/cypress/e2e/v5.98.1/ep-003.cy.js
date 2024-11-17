const registerScreen = require("../../support/screens/register-screen");
const MakeScreenShot = require("../../support/utils/make-screenshot");


describe("EP-003: Crear cuenta en Ghost con contraseña menor a 3 caracteres", () => {
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
      registerScreen.enterSiteTitle(data.userInvalidatePassword.site),
      registerScreen.enterFullName(data.userInvalidatePassword.name),
      registerScreen.enterEmailAddress(data.userInvalidatePassword.email),
      registerScreen.enterPassword(data.userInvalidatePassword.password),
      makeScreenShot.execute("fillForm");
      registerScreen.clickCreateAccount();

      cy.log("THEN: Validando mensaje de error en el campo de contraseña");
      registerScreen.validateErrorPassword(data.userInvalidatePassword.errorMessage);
      registerScreen.validateErrorMain(data.userInvalidatePassword.errorMessageMain);
      makeScreenShot.execute("validateError");
    });
  });
});