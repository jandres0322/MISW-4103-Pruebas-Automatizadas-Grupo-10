const loginScreen = require("../support/screens/login-screen");
const dashboardScreen = require("../support/screens/dashboard-screen");
const createPostScreen = require("../support/screens/create-post-screen");
const listPostScreen = require("../support/screens/list-post-screen");


describe("EP-010: Escribir un post sin agregar el titulo del post", () => {
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
      dashboardScreen.clickCreateNewPost();

      cy.log("WHEN: Escribiendo un post sin un título");
      cy.fixture("create-post").then((data) => {
        createPostScreen.enterDescriptionPost(data.createPostTitleEmpty.description);
        createPostScreen.clickPageSettings();
        createPostScreen.enterExcerptPost(data.createPostTitleEmpty.excerpt);
        createPostScreen.selectTag(data.createPostTitleEmpty.tag);
        createPostScreen.clickPageSettings();
        createPostScreen.clickPublish();
        createPostScreen.clickFinalReview();
        createPostScreen.clickConfirmCreatePost();
        createPostScreen.clickCloseModal();

        cy.log("THEN:  Se debe validar el titulo vacio del post");
        listPostScreen.validateTitleListPage(data.createPostTitleEmpty.title);
      });
    })
  });
});