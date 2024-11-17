const loginScreen = require("../../support/screens/login-screen");
const dashboardScreen = require("../../support/screens/dashboard-screen");
const listMemberScreen = require("../../support/screens/list-member-screen");
const createMemberScreen = require("../../support/screens/create-member-screen");
const MakeScreenShot = require("../../support/utils/make-screenshot");

describe("EP-016: Crear miembro con campos invalidos", () => {
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
      listMemberScreen.clickCreateNewMember();

      cy.log("WHEN: Ingresando datos invalidos del miembro");
      cy.fixture("create-member").then((data) => {
        makeScreenShot.execute("createMemberScreen");
        createMemberScreen.enterNameMember(data.createMemberInvalidEmail.name);
        createMemberScreen.enterEmailMember(data.createMemberInvalidEmail.email);
        createMemberScreen.enterNoteMember(data.createMemberInvalidEmail.note);
        makeScreenShot.execute("afterCreateMember");
        createMemberScreen.clickSaveMember();

        cy.log("THEN: Se muestra mensaje de error");
        createMemberScreen.validateMessageError(data.createMemberInvalidEmail.messageError);
        createMemberScreen.validateButtonError();
        makeScreenShot.execute("validateMessageError");
      });

    })
  });
});