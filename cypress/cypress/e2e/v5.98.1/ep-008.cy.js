const loginScreen = require("../../support/screens/login-screen");
const dashboardScreen = require("../../support/screens/dashboard-screen");
const listTagScreen = require("../../support/screens/list-tag-screen");
const createTagScreen = require("../../support/screens/create-tag-screen");
const MakeScreenShot = require("../../support/utils/make-screenshot");

describe("EP-008: Crear tag con campo de color invalido", () => {
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
      dashboardScreen.clickListTag();
      makeScreenShot.execute("listTagScreen");
      listTagScreen.clickCreateNewTag();

      cy.log("WHEN: Creando un tag con campos invalidos");
      cy.fixture("create-tag").then((data) => {
        makeScreenShot.execute("beforeCreateTag");
        createTagScreen.enterName(data.createColorInvalid.name);
        createTagScreen.enterColor(data.createColorInvalid.color);
        createTagScreen.enterSlug(data.createColorInvalid.slug);
        createTagScreen.enterDescription(data.createColorInvalid.description);
        createTagScreen.clickSaveTag();

        cy.log("THEN: Se debe validar el mensaje de error");
        createTagScreen.validateErrorMessage(data.createColorInvalid.errorMessage);
        makeScreenShot.execute("validateCreateTag");
      });
    })
  });
});