const loginScreen = require("../../support/screens/v5.98.1/login-screen");
const dashboardScreen = require("../../support/screens/v5.98.1/dashboard-screen");
const listMemberScreen = require("../../support/screens/v5.98.1/list-member-screen");
const parametersLogin = require("../../fixtures/data/parameters-login.json");

describe("EP-017: Crear miembro administrador de manera correcta", () => {
  beforeEach(() => {
    cy.log("Ingresando a Ghost");
    cy.visit(Cypress.env("apiUrl"));
  });

  it("Ejecución", () => {
    cy.log("GIVEN: Cargando datos de usuario e ingresando al dashboard");
    loginScreen.enterEmail(parametersLogin.email);
    loginScreen.enterPassword(parametersLogin.password);
    loginScreen.clickSubmit();
    dashboardScreen.validateUrlDashboard();
    cy.wait(2000);
    dashboardScreen.clickListMember();

    cy.log("WHEN: Ingresando datos invalidos del miembro");
    cy.fixture("user-register").then((data) => {
      listMemberScreen.clickCreateAdminMember();

      cy.log("THEN: Se muestra mensaje de error");
    });
  });
});
