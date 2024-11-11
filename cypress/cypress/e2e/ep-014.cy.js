const loginScreen = require("../support/screens/login-screen");
const dashboardScreen = require("../support/screens/dashboard-screen");
const createPostScreen = require("../support/screens/create-post-screen");
const listPostScreen = require("../support/screens/list-post-screen");


describe("EP-014: Editar post agregando imagen desde unplash", () => {
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

      cy.fixture("create-post").then((data) => {
        createPostScreen.enterTitlePost(data.createPostForEdit.title);
        createPostScreen.enterDescriptionPost(data.createPostForEdit.description);
        createPostScreen.clickPageSettings();
        createPostScreen.enterExcerptPost(data.createPostForEdit.excerpt);
        createPostScreen.selectTag(data.createPostForEdit.tag);
        createPostScreen.clickPageSettings();
        createPostScreen.clickPublish();
        createPostScreen.clickFinalReview();
        createPostScreen.clickConfirmCreatePost();
        createPostScreen.clickCloseModal();

        cy.log("WHEN: Editando el post");
        listPostScreen.selectPostForEdit(data.createPostForEdit.title);
        createPostScreen.enterTitlePost(data.createPostForEdit.titleEdit);
        createPostScreen.enterDescriptionPost(data.createPostForEdit.descriptionEdit);
        createPostScreen.clickPageSettings();
        createPostScreen.enterExcerptPost(data.createPostForEdit.excerptEdit);
        createPostScreen.clickPageSettings();
        createPostScreen.searchUploadImageUnsplash(data.createPostForEdit.imageUnplash);
        createPostScreen.clickUpdatePost();
        createPostScreen.clickBackListPost();

        cy.log("THEN: Validando que el post se haya editado correctamente");
        listPostScreen.validateTitleListPage(data.createPostForEdit.titleEdit);
      });

    })
  });
});