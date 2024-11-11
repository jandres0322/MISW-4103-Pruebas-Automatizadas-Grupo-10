const loginScreen = require("../support/screens/login-screen");
const dashboardScreen = require("../support/screens/dashboard-screen");
const createPostScreen = require("../support/screens/create-post-screen");
const listPostScreen = require("../support/screens/list-post-screen");


describe("EP-013: Escribir un post con todos los campos diligenciados agregando una imagen desde el dispositivo", () => {
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

      cy.log("WHEN: Escribiendo un post con todos los campos diligenciados, agregando una imagen desde el dispositivo");
      cy.fixture("create-post").then((data) => {
        createPostScreen.enterTitlePost(data.createPostValid.title);
        createPostScreen.enterDescriptionPost(data.createPostValid.description);
        createPostScreen.clickUploadImage();
        // createPostScreen.clickPageSettings();
        // createPostScreen.enterExcerptPost(data.createPostValid.excerpt);
        // createPostScreen.selectTag(data.createPostValid.tag);
        // createPostScreen.clickPageSettings();
        // createPostScreen.clickPublish();
        // createPostScreen.clickFinalReview();
        // createPostScreen.clickConfirmCreatePost();
        // createPostScreen.clickCloseModal();

        cy.log("THEN: Se debe validar que el post se haya creado correctamente");
        // listPostScreen.validateTitleListPage(data.createPostValid.title);
      });
    })
  });
});