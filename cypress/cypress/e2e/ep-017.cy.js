const loginScreen = require("../support/screens/login-screen");
const dashboardScreen = require("../support/screens/dashboard-screen");
const listMemberScreen = require("../support/screens/list-member-screen");
const createMemberScreen = require("../support/screens/create-member-screen");


describe("EP-017: Crear miembro administrador de manera correcta", () => {
  beforeEach(() => {
    cy.log("Ingresando a Ghost");
    cy.visit(Cypress.env("apiUrl"));
  });

  it("Ejecución", () => {
    cy.log("GIVEN: Cargando datos de usuario e ingresando al dashboard");
    cy.fixture("user-login").then((data) => {
      loginScreen.enterEmail(data.userLogin.email);
      loginScreen.enterPassword(data.userLogin.password);
      loginScreen.clickSubmit();
      dashboardScreen.validateUrlDashboard();
      dashboardScreen.validateTitleSite(data.userLogin.site);
      cy.wait(2000);
      dashboardScreen.clickListMember();

      cy.log("WHEN: Ingresando datos invalidos del miembro");
      cy.fixture("user-register").then((data) => {
        listMemberScreen.clickCreateAdminMember();

        cy.log("THEN: Se muestra mensaje de error");
        listMemberScreen.validateNameMember(data.userValidate.name);
      });

    })
  });
});