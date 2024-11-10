const loginScreen = require("../support/screens/login-screen");
const dashboardScreen = require("../support/screens/dashboard-screen");
const listPageScreen = require("../support/screens/list-page-screen");
const listTagScreen = require("../support/screens/list-tag-screen");
const createTagScreen = require("../support/screens/create-tag-screen");

describe("EP-008: Crear tag con campo de color invalido", () => {
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
      dashboardScreen.clickListTag();
      listTagScreen.clickCreateNewTag();

      cy.log("WHEN: Creando un tag con campos invalidos");
      cy.fixture("create-tag").then((data) => {
        
        createTagScreen.enterName(data.createColorInvalid.name);
        createTagScreen.enterColor(data.createColorInvalid.color);
        createTagScreen.enterSlug(data.createColorInvalid.slug);
        createTagScreen.enterDescription(data.createColorInvalid.description);
        createTagScreen.clickSaveTag();

        cy.log("THEN: Se debe validar la creación de la pagina");
        createTagScreen.validateErrorMessage(data.createColorInvalid.errorMessage);
      });
    })
  });
});