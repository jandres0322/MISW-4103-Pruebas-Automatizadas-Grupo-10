const loginScreen = require("../support/screens/login-screen");
const dashboardScreen = require("../support/screens/dashboard-screen");
const listPageScreen = require("../support/screens/list-page-screen");
const createPageScreen = require("../support/screens/create-page-screen");

describe("EP-005: Crear pagina sin agregar el titulo de la pagina", () => {
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

      cy.log("WHEN: Creando una pagina sin agregar el titulo de la pagina");
      cy.fixture("create-page").then((data) => {
        createPageScreen.enterDescriptionPage(data.createPageTitleEmpty.description);
        createPageScreen.clickPageSettings();
        createPageScreen.selectTag(data.createPageTitleEmpty.tag);
        createPageScreen.enterExcerptPage(data.createPageTitleEmpty.excerpt);
        createPageScreen.clickPageSettings();
        createPageScreen.clickPublish(); 
        createPageScreen.clickFinalReview();
        createPageScreen.clickConfirmCreatePage();
        createPageScreen.clickCloseModal();

        cy.log("THEN: Se debe validar el titulo vacio de la pagina");
        listPageScreen.validateTitleListPage(data.createPageTitleEmpty.titleEmpty);
      });
    })
  });
});