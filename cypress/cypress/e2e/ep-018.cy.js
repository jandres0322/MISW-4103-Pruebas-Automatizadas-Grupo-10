const loginScreen = require("../support/screens/login-screen");
const dashboardScreen = require("../support/screens/dashboard-screen");
const listMemberScreen = require("../support/screens/list-member-screen");
const createMemberScreen = require("../support/screens/create-member-screen");


describe("EP-018: Crear miembro con campos diligenciados correctamente", () => {
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
      listMemberScreen.clickCreateNewMember();

      cy.log("WHEN: Ingresando datos validos para crear el miembro");
      cy.fixture("create-member").then((data) => {
        createMemberScreen.enterNameMember(data.createMemberValid.name);
        createMemberScreen.enterEmailMember(data.createMemberValid.email);
        createMemberScreen.enterNoteMember(data.createMemberValid.note);
        createMemberScreen.clickSaveMember();

        cy.log("THEN: Se muestra mensaje de error");
        createMemberScreen.validateNameCreatedText(data.createMemberValid.name);
      });

    })
  });
});