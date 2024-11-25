const loginScreen = require("../../support/screens/v5.98.1/login-screen");
const dashboardScreen = require("../../support/screens/v5.98.1/dashboard-screen");
const createPostScreen = require("../../support/screens/v5.98.1/create-post-screen");
const listPostScreen = require("../../support/screens/v5.98.1/list-post-screen");
const MakeScreenShot = require("../../support/utils/make-screenshot");
const mockCreatePostValid = require("../../fixtures/data/create-post-valid.json");
const { ApiMockaroo } = require("../../support/utils/api-mockaroo");
const { faker } = require("@faker-js/faker");

describe("EP-012: Crear un post con todos los campos diligenciados", () => {
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

      mockCreatePostValid.forEach((data) => {
        createPostScreen.enterTitlePost(data.title);
        createPostScreen.enterDescriptionPost(data.description);
        createPostScreen.clickPageSettings();
        createPostScreen.enterExcerptPost(data.excerpt);
        createPostScreen.selectTag(data.tag);
        createPostScreen.clickPageSettings();
        createPostScreen.clickPublish();
        createPostScreen.clickFinalReview();
        createPostScreen.clickConfirmCreatePost();
        createPostScreen.clickCloseModal();

        cy.log("THEN: Se debe validar que el post se haya creado correctamente");
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

      ApiMockaroo.dataCreatePostValid().then((data) => {
        data.forEach((item) => {
          createPostScreen.enterTitlePost(item.title);
          createPostScreen.enterDescriptionPost(item.description);
          createPostScreen.clickPageSettings();
          createPostScreen.enterExcerptPost(item.excerpt);
          createPostScreen.selectTag(item.tag);
          createPostScreen.clickPageSettings();
          createPostScreen.clickPublish();
          createPostScreen.clickFinalReview();
          createPostScreen.clickConfirmCreatePost();
          createPostScreen.clickCloseModal();

          cy.log("THEN: Se debe validar que el post se haya creado correctamente");
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
        title: faker.lorem.words(5),
        description: faker.lorem.words(50),
        excerpt: faker.lorem.words(10),
        tag: faker.lorem.word(),
      };

      createPostScreen.enterTitlePost(data.title);
      createPostScreen.enterDescriptionPost(data.description);
      createPostScreen.clickPageSettings();
      createPostScreen.enterExcerptPost(data.excerpt);
      createPostScreen.selectTag(data.tag);
      createPostScreen.clickPageSettings();
      createPostScreen.clickPublish();
      createPostScreen.clickFinalReview();
      createPostScreen.clickConfirmCreatePost();
      createPostScreen.clickCloseModal();

      cy.log("THEN: Se debe validar que el post se haya creado correctamente");
      listPostScreen.validateTitleListPage(data.title);
    });
  });
});
