const loginScreen = require("../../support/screens/login-screen");
const dashboardScreen = require("../../support/screens/dashboard-screen");
const createPostScreen = require("../../support/screens/create-post-screen");
const listPostScreen = require("../../support/screens/list-post-screen");
const MakeScreenShot = require("../../support/utils/make-screenshot");


describe("EP-010: Escribir un post sin agregar el titulo del post", () => {
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

      cy.log("WHEN: Escribiendo un post sin un título");
      cy.fixture("create-post").then((data) => {
        createPostScreen.enterDescriptionPost(data.createPostTitleEmpty.description);
        createPostScreen.clickPageSettings();
        createPostScreen.enterExcerptPost(data.createPostTitleEmpty.excerpt);
        createPostScreen.selectTag(data.createPostTitleEmpty.tag);
        createPostScreen.clickPageSettings();
        createPostScreen.clickPublish();
        makeScreenShot.execute("afterCreatePost");
        createPostScreen.clickFinalReview();
        makeScreenShot.execute("finalReview");
        createPostScreen.clickConfirmCreatePost();
        createPostScreen.clickCloseModal();

        cy.log("THEN:  Se debe validar el titulo vacio del post");
        listPostScreen.validateTitleListPage(data.createPostTitleEmpty.title);
        makeScreenShot.execute("validateListPost");
      });
    })
  });
});