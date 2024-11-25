const loginScreen = require("../../support/screens/v5.98.1/login-screen");
const dashboardScreen = require("../../support/screens/v5.98.1/dashboard-screen");
const createPostScreen = require("../../support/screens/v5.98.1/create-post-screen");
const listPostScreen = require("../../support/screens/v5.98.1/list-post-screen");
const MakeScreenShot = require("../../support/utils/make-screenshot");
const mockCreatePostTitleEmpty = require("../../fixtures/data/create-post-empty-title.json");
const { ApiMockaroo } = require("../../support/utils/api-mockaroo");
const { faker } = require("@faker-js/faker");

describe("EP-010: Escribir un post sin agregar el título del post", () => {
  beforeEach(() => {
    cy.log("Ingresando a Ghost");
    cy.visit(Cypress.env("apiUrl"));
  });

  it("Ejecución escenario - Pool de datos a-priori", () => {
    const makeScreenShot = new MakeScreenShot(Cypress.env("ghostVersionReleaseCandidate"), Cypress.currentTest.titlePath);

    cy.fixture("user-login").then((loginData) => {
      makeScreenShot.execute("beforeLogin");
      loginScreen.enterEmail(loginData.userLogin.email);
      loginScreen.enterPassword(loginData.userLogin.password);
      loginScreen.clickSubmit();
      dashboardScreen.validateUrlDashboard();
      dashboardScreen.clickCreateNewPost();

      mockCreatePostTitleEmpty.forEach((data) => {
        createPostScreen.enterDescriptionPost(data.description);
        createPostScreen.clickPageSettings();
        createPostScreen.enterExcerptPost(data.excerpt);
        createPostScreen.selectTag(data.tag);
        createPostScreen.clickPageSettings();
        createPostScreen.clickPublish();
        createPostScreen.clickFinalReview();
        createPostScreen.clickConfirmCreatePost();
        createPostScreen.clickCloseModal();

        cy.log("THEN: Se debe validar el título vacío del post");
        listPostScreen.validateTitleListPage(data.title);
      });
    });
  });

  it("Ejecución escenario - Pool de datos aleatorio dinámico", () => {
    const makeScreenShot = new MakeScreenShot(Cypress.env("ghostVersionReleaseCandidate"), Cypress.currentTest.titlePath);

    cy.fixture("user-login").then((loginData) => {
      makeScreenShot.execute("beforeLogin");
      loginScreen.enterEmail(loginData.userLogin.email);
      loginScreen.enterPassword(loginData.userLogin.password);
      loginScreen.clickSubmit();
      dashboardScreen.validateUrlDashboard();
      dashboardScreen.clickCreateNewPost();

      ApiMockaroo.dataEmptyCreatePost().then((data) => {
        data.forEach((item) => {
          createPostScreen.enterDescriptionPost(item.description);
          createPostScreen.clickPageSettings();
          createPostScreen.enterExcerptPost(item.excerpt);
          createPostScreen.selectTag(item.tag);
          createPostScreen.clickPageSettings();
          createPostScreen.clickPublish();
          createPostScreen.clickFinalReview();
          createPostScreen.clickConfirmCreatePost();
          createPostScreen.clickCloseModal();

          cy.log("THEN: Se debe validar el título vacío del post");
          listPostScreen.validateTitleListPage(item.title);
        });
      });
    });
  });

  it("Ejecución escenario - Escenario aleatorio", () => {
    const makeScreenShot = new MakeScreenShot(Cypress.env("ghostVersionReleaseCandidate"), Cypress.currentTest.titlePath);

    cy.fixture("user-login").then((loginData) => {
      makeScreenShot.execute("beforeLogin");
      loginScreen.enterEmail(loginData.userLogin.email);
      loginScreen.enterPassword(loginData.userLogin.password);
      loginScreen.clickSubmit();
      dashboardScreen.validateUrlDashboard();
      dashboardScreen.clickCreateNewPost();

      const data = {
        title: null, // Sin título
        description: faker.lorem.words(50),
        excerpt: faker.lorem.words(10),
        tag: faker.lorem.word(),
      };

      createPostScreen.enterDescriptionPost(data.description);
      createPostScreen.clickPageSettings();
      createPostScreen.enterExcerptPost(data.excerpt);
      createPostScreen.selectTag(data.tag);
      createPostScreen.clickPageSettings();
      createPostScreen.clickPublish();
      createPostScreen.clickFinalReview();
      createPostScreen.clickConfirmCreatePost();
      createPostScreen.clickCloseModal();

      cy.log("THEN: Se debe validar el título vacío del post");
      listPostScreen.validateTitleListPage(data.title);
    });
  });
});
