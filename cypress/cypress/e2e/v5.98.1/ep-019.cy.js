const loginScreen = require("../../support/screens/v5.98.1/login-screen");
const dashboardScreen = require("../../support/screens/v5.98.1/dashboard-screen");
const listMemberScreen = require("../../support/screens/v5.98.1/list-member-screen");
const MakeScreenShot = require("../../support/utils/make-screenshot");


describe("EP-019: Crear miembros mediante el archivo CSV ingresando en el archivo un correo electronico con formato invalido", () => {
  beforeEach(() => {
    cy.log("Ingresando a Ghost");
    cy.visit(Cypress.env("apiUrl"));
  });

  it("Ejecución", () => {
    const makeScreenShot = new MakeScreenShot(Cypress.env("ghostVersionReleaseCandidate"), Cypress.currentTest.titlePath);

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
      listMemberScreen.loadFileCSV(false);
      makeScreenShot.execute("loadFileCSV");

      cy.log("THEN: Validando que los miembros se hayan cargado correctamente");
      listMemberScreen.validateNumbersMembers(1);
      listMemberScreen.validateErrorMessageImportMember('Please map "Email" to one of the fields in the CSV');
      makeScreenShot.execute("validateMessageError");
    })
  });
});