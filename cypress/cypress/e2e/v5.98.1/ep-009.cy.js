const loginScreen = require("../../support/screens/v5.98.1/login-screen");
const dashboardScreen = require("../../support/screens/v5.98.1/dashboard-screen");
const listTagScreen = require("../../support/screens/v5.98.1/list-tag-screen");
const createTagScreen = require("../../support/screens/v5.98.1/create-tag-screen");
const MakeScreenShot = require("../../support/utils/make-screenshot");

describe("EP-009: Crear tag con los campos diligenciados correctamente", () => {
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

      cy.log("WHEN: Creando un tag con campos validos");
      cy.fixture("create-tag").then((data) => {
        makeScreenShot.execute("beforeCreateTag");
        createTagScreen.enterName(data.createTagValid.name);
        createTagScreen.enterColor(data.createTagValid.color);
        createTagScreen.enterSlug(data.createTagValid.slug);
        createTagScreen.enterDescription(data.createTagValid.description);
        createTagScreen.clickSaveTag();

        cy.log("THEN: Se debe validar que el tag fue creado correctamente");
        createTagScreen.validateTitleTag(data.createTagValid.name);
        makeScreenShot.execute("validateCreateTag");
      });
    })
  });
});