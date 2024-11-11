const loginScreen = require("../support/screens/login-screen");
const dashboardScreen = require("../support/screens/dashboard-screen");
const createPostScreen = require("../support/screens/create-post-screen");
const listPostScreen = require("../support/screens/list-post-screen");
const listTagScreen = require("../support/screens/list-tag-screen");
const createTagScreen = require("../support/screens/create-tag-screen");


describe("EP-015: Editar post agregando tag creado previamente", () => {
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

      cy.fixture("create-post").then((data) => {

        dashboardScreen.clickListTag();
        listTagScreen.clickCreateNewTag();
        createTagScreen.enterName(data.createPostForEditWithNewTag.tagName);
        createTagScreen.enterDescription(data.createPostForEditWithNewTag.tagDescription);
        createTagScreen.enterColor(data.createPostForEditWithNewTag.tagColor);
        createTagScreen.enterSlug(data.createPostForEditWithNewTag.tagSlug);
        createTagScreen.clickSaveTag();

        dashboardScreen.clickCreateNewPost();
        createPostScreen.enterTitlePost(data.createPostForEditWithNewTag.title);
        createPostScreen.enterDescriptionPost(data.createPostForEditWithNewTag.description);
        createPostScreen.clickPageSettings();
        createPostScreen.selectTag(data.createPostForEditWithNewTag.tag);
        createPostScreen.enterExcerptPost(data.createPostForEditWithNewTag.excerpt);
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
        createPostScreen.selectTag(data.createPostForEditWithNewTag.tagName);
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