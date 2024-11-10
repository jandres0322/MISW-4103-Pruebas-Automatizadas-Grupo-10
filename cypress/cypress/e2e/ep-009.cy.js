const loginScreen = require("../support/screens/login-screen");
const dashboardScreen = require("../support/screens/dashboard-screen");
const listPageScreen = require("../support/screens/list-page-screen");
const listTagScreen = require("../support/screens/list-tag-screen");
const createTagScreen = require("../support/screens/create-tag-screen");

describe("EP-008: Crear tag con los campos diligenciados correctamente", () => {
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

      cy.log("WHEN: Creando un tag con campos validos");
      cy.fixture("create-tag").then((data) => {
        
        createTagScreen.enterName(data.createTagValid.name);
        createTagScreen.enterColor(data.createTagValid.color);
        createTagScreen.enterSlug(data.createTagValid.slug);
        createTagScreen.enterDescription(data.createTagValid.description);
        createTagScreen.clickSaveTag();

        cy.log("THEN: Se debe validar que el tag fue creado correctamente");
        createTagScreen.validateTitleTag(data.createTagValid.name)
      });
    })
  });
});