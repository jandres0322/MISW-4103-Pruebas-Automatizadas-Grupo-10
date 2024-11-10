const loginScreen = require("../support/screens/login-screen");
const dashboardScreen = require("../support/screens/dashboard-screen");
const createPostScreen = require("../support/screens/create-post-screen");
const ListPostScheduledScreen = require("../support/screens/list-post-scheduled-screen");
const listPostScheduledScreen = require("../support/screens/list-post-scheduled-screen");

describe("EP-011: Escribir un post con todos los campos diligenciados pero programado", () => {
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

      cy.log("WHEN: Escribiendo un post con todos los campos diligenciados pero programado");
      cy.fixture("create-post").then((data) => {
        createPostScreen.enterTitlePost(data.createPostSchedule.title);
        createPostScreen.enterDescriptionPost(data.createPostSchedule.description);
        createPostScreen.clickPageSettings();
        createPostScreen.enterExcerptPost(data.createPostSchedule.excerpt);
        createPostScreen.selectTag(data.createPostSchedule.tag);
        createPostScreen.clickPageSettings();
        createPostScreen.clickPublish();
        createPostScreen.clickScheduledDropdown();
        createPostScreen.clickSelectScheduled();
        createPostScreen.clickFinalReview();
        createPostScreen.clickConfirmCreatePost();
        createPostScreen.clickCloseModal();

        cy.log("THEN: Se debe validar que el post se encuentre listado en los programados");
          dashboardScreen.clickListPostScheduled();
          listPostScheduledScreen.validateTitleListPost(data.createPostSchedule.title);
          listPostScheduledScreen.validateScheduledTextPost();
      });
    })
  });
});