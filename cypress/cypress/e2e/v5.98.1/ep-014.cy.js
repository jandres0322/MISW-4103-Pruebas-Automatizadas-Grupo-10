const loginScreen = require("../../support/screens/login-screen");
const dashboardScreen = require("../../support/screens/dashboard-screen");
const createPostScreen = require("../../support/screens/create-post-screen");
const listPostScreen = require("../../support/screens/list-post-screen");
const MakeScreenShot = require("../../support/utils/make-screenshot");


describe("EP-014: Editar post agregando imagen desde unplash", () => {
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
      dashboardScreen.clickCreateNewPost();
      makeScreenShot.execute("createPostScreen");

      cy.fixture("create-post").then((data) => {
        createPostScreen.enterTitlePost(data.createPostForEdit.title);
        createPostScreen.enterDescriptionPost(data.createPostForEdit.description);
        createPostScreen.clickPageSettings();
        createPostScreen.enterExcerptPost(data.createPostForEdit.excerpt);
        createPostScreen.selectTag(data.createPostForEdit.tag);
        createPostScreen.clickPageSettings();
        createPostScreen.clickPublish();
        makeScreenShot.execute("afterCreatePost");
        createPostScreen.clickFinalReview();
        makeScreenShot.execute("finalReview");
        createPostScreen.clickConfirmCreatePost();
        createPostScreen.clickCloseModal();

        cy.log("WHEN: Editando el post");
        makeScreenShot.execute("beforeEditPost");
        listPostScreen.selectPostForEdit(data.createPostForEdit.title);
        createPostScreen.enterTitlePost(data.createPostForEdit.titleEdit);
        createPostScreen.enterDescriptionPost(data.createPostForEdit.descriptionEdit);
        createPostScreen.clickPageSettings();
        createPostScreen.enterExcerptPost(data.createPostForEdit.excerptEdit);
        createPostScreen.clickPageSettings();
        createPostScreen.searchUploadImageUnsplash(data.createPostForEdit.imageUnplash);
        makeScreenShot.execute("uploadImageUnplash");
        createPostScreen.clickUpdatePost();
        createPostScreen.clickBackListPost();

        cy.log("THEN: Validando que el post se haya editado correctamente");
        listPostScreen.validateTitleListPage(data.createPostForEdit.titleEdit);
        makeScreenShot.execute("validateListPost");
      });

    })
  });
});