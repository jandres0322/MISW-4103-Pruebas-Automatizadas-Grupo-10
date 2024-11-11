const loginScreen = require("../support/screens/login-screen");
const dashboardScreen = require("../support/screens/dashboard-screen");
const listMemberScreen = require("../support/screens/list-member-screen");
const createMemberScreen = require("../support/screens/create-member-screen");


describe("EP-020: Crear dos miembros mediante el archivo CSV", () => {
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

      cy.log("WHEN: Importando el archivo CSV para cargar los miembros");
      listMemberScreen.clickSettingListMember();
      listMemberScreen.clickImportMember();
      listMemberScreen.loadFileCSV();

      cy.log("THEN: Validando que los miembros se hayan cargado correctamente");
      listMemberScreen.validateNumbersMembers();
      listMemberScreen.validateMembersToUpload();
    })
  });
});