const registerScreen = require("../../support/screens/v5.98.1/register-screen");
const dashboardScreen = require("../../support/screens/v5.98.1/dashboard-screen");
const MakeScreenShot = require("../../support/utils/make-screenshot");

describe("EP-004: Crear cuenta en Ghost con los campos diligenciados correctamente", () => {
  beforeEach(() => {
    cy.log("Ingresando a Ghost");
    cy.visit(Cypress.env("apiUrl"));
  });

  it("Ejecución", () => {
    const makeScreenShot = new MakeScreenShot(Cypress.env("ghostVersionReleaseCandidate"), Cypress.currentTest.titlePath);


    cy.log("GIVEN: Cargando datos de usuario")
    cy.fixture("user-register").then((data) => {

      cy.log("WHEN: Ingresando datos de usuario en el formulario de registro");
      makeScreenShot.execute("beforeRegister");
      registerScreen.enterSiteTitle(data.userValidate.site);
      registerScreen.enterFullName(data.userValidate.name);
      registerScreen.enterEmailAddress(data.userValidate.email);
      registerScreen.enterPassword(data.userValidate.password);
      makeScreenShot.execute("fillForm")
      registerScreen.clickCreateAccount();

      cy.log("THEN: Valida que se redireccione a la página de dashboard");
      dashboardScreen.validateUrlDashboard();
      dashboardScreen.validateTitleSite(data.userValidate.site);
      makeScreenShot.execute("validateDashboard");
    });
  });
});
