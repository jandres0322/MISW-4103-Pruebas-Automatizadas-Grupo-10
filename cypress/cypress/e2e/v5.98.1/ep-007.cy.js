const loginScreen = require("../../support/screens/login-screen");
const dashboardScreen = require("../../support/screens/dashboard-screen");
const listTagScreen = require("../../support/screens/list-tag-screen");
const createTagScreen = require("../../support/screens/create-tag-screen");
const MakeScreenShot = require("../../support/utils/make-screenshot");

describe("EP-007: Crear tag con campos invalidos", () => {
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
      dashboardScreen.clickListTag();
      makeScreenShot.execute("listTagScreen");
      listTagScreen.clickCreateNewTag();

      cy.log("WHEN: Creando un tag con campos invalidos");
      cy.fixture("create-tag").then((data) => {
        makeScreenShot.execute("beforeCreateTag");
        createTagScreen.enterName(data.createNameEmpty.name);
        createTagScreen.enterColor(data.createNameEmpty.color);
        createTagScreen.enterSlug(data.createNameEmpty.slug);
        createTagScreen.enterDescription(data.createNameEmpty.description);
        createTagScreen.clickSaveTag();

        cy.log("THEN: Se debe validar el mensaje de error");
        createTagScreen.validateErrorMessage(data.createNameEmpty.errorMessage);
        makeScreenShot.execute("validateCreateTag");
      });
    })
  });
});