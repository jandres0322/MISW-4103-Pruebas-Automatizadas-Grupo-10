const loginScreen = require("../../support/screens/login-screen");
const dashboardScreen = require("../../support/screens/dashboard-screen");
const listMemberScreen = require("../../support/screens/list-member-screen");
const createMemberScreen = require("../../support/screens/create-member-screen");
const MakeScreenShot = require("../../support/utils/make-screenshot");


describe("EP-020: Crear dos miembros mediante el archivo CSV", () => {
  beforeEach(() => {
    cy.log("Ingresando a Ghost");
    cy.visit(Cypress.env("apiUrl"));
  });

  it("Ejecución", () => {
    const makeScreenShot = new MakeScreenShot("5.98.1");
    cy.log("GIVEN: Cargando datos de usuario e ingresando al dashboard");
    cy.fixture("user-login").then((data) => {
      makeScreenShot.execute("beforeLogin");
      loginScreen.enterEmail(data.userLogin.email);
      loginScreen.enterPassword(data.userLogin.password);
      loginScreen.clickSubmit();
      makeScreenShot.execute("afterLogin");
      dashboardScreen.validateUrlDashboard();
      dashboardScreen.validateTitleSite(data.userLogin.site);
      makeScreenShot.execute("validateDashboard");
      cy.wait(2000);
      dashboardScreen.clickListMember();
      makeScreenShot.execute("listMemberScreen");

      cy.log("WHEN: Importando el archivo CSV para cargar los miembros");
      listMemberScreen.clickSettingListMember();
      makeScreenShot.execute("settingListMemberScreen");
      listMemberScreen.clickImportMember();
      makeScreenShot.execute("importMemberScreen");
      listMemberScreen.loadFileCSV();
      makeScreenShot.execute("loadFileCSV");

      cy.log("THEN: Validando que los miembros se hayan cargado correctamente");
      listMemberScreen.validateNumbersMembers(2);
      listMemberScreen.validateMembersToUpload();
      makeScreenShot.execute("validateMembersToUpload");
    })
  });
});