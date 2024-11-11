const loginScreen = require("../support/screens/login-screen");
const dashboardScreen = require("../support/screens/dashboard-screen");
const listPageScreen = require("../support/screens/list-page-screen");
const createPageScreen = require("../support/screens/create-page-screen");

describe("EP-006: Crear pagina diligenciado todos los campos correctamente", () => {
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
      dashboardScreen.clickListPage();
      listPageScreen.clickCreateNewPage();

      cy.log("WHEN: Creando una pagina con todos los campos diligenciados correctamente");
      cy.fixture("create-page").then((data) => {
        createPageScreen.enterTitlePage(data.createAllFields.title);
        createPageScreen.enterDescriptionPage(data.createAllFields.description);
        createPageScreen.clickPageSettings();
        createPageScreen.selectTag(data.createAllFields.tag);
        createPageScreen.enterExcerptPage(data.createAllFields.excerpt);
        createPageScreen.clickPageSettings();
        createPageScreen.clickPublish(); 
        createPageScreen.clickFinalReview();
        createPageScreen.clickConfirmCreatePage();
        createPageScreen.clickCloseModal();

        cy.log("THEN: Se debe validar la creación de la pagina");
        listPageScreen.validateTitleListPage(data.createAllFields.title);
      });
    })
  });
});