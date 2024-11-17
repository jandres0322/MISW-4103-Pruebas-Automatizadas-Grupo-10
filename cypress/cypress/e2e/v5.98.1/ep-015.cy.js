const loginScreen = require("../../support/screens/login-screen");
const dashboardScreen = require("../../support/screens/dashboard-screen");
const createPostScreen = require("../../support/screens/create-post-screen");
const listPostScreen = require("../../support/screens/list-post-screen");
const listTagScreen = require("../../support/screens/list-tag-screen");
const createTagScreen = require("../../support/screens/create-tag-screen");
const MakeScreenShot = require("../../support/utils/make-screenshot");


describe("EP-015: Editar post agregando tag creado previamente", () => {
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

      cy.fixture("create-post").then((data) => {
        dashboardScreen.clickListTag();
        makeScreenShot.execute("listTagScreen");
        listTagScreen.clickCreateNewTag();
        makeScreenShot.execute("createTagScreen");
        createTagScreen.enterName(data.createPostForEditWithNewTag.tagName);
        createTagScreen.enterDescription(data.createPostForEditWithNewTag.tagDescription);
        createTagScreen.enterColor(data.createPostForEditWithNewTag.tagColor);
        createTagScreen.enterSlug(data.createPostForEditWithNewTag.tagSlug);
        createTagScreen.clickSaveTag();
        makeScreenShot.execute("afterCreateTag");

        dashboardScreen.clickCreateNewPost();
        makeScreenShot.execute("createPostScreen");
        createPostScreen.enterTitlePost(data.createPostForEditWithNewTag.title);
        createPostScreen.enterDescriptionPost(data.createPostForEditWithNewTag.description);
        createPostScreen.clickPageSettings();
        createPostScreen.selectTag(data.createPostForEditWithNewTag.tag);
        createPostScreen.enterExcerptPost(data.createPostForEditWithNewTag.excerpt);
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
        createPostScreen.selectTag(data.createPostForEditWithNewTag.tagName);
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