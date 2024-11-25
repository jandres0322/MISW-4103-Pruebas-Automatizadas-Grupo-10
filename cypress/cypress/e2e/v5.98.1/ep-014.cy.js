const loginScreen = require("../../support/screens/v5.98.1/login-screen");
const dashboardScreen = require("../../support/screens/v5.98.1/dashboard-screen");
const createPostScreen = require("../../support/screens/v5.98.1/create-post-screen");
const listPostScreen = require("../../support/screens/v5.98.1/list-post-screen");
const MakeScreenShot = require("../../support/utils/make-screenshot");
const mockEditPost = require("../../fixtures/data/edit-post.json");
const { ApiMockaroo } = require("../../support/utils/api-mockaroo");
const { faker } = require("@faker-js/faker");

describe("EP-014: Editar post agregando imagen desde Unsplash", () => {
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

      mockEditPost.forEach((data) => {
        dashboardScreen.clickCreateNewPost();
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

        cy.log("WHEN: Editando el post");
        listPostScreen.selectPostForEdit(data.title);
        createPostScreen.enterTitlePost(data.titleEdit);
        createPostScreen.enterDescriptionPost(data.descriptionEdit);
        createPostScreen.clickPageSettings();
        createPostScreen.enterExcerptPost(data.excerptEdit);
        createPostScreen.clickPageSettings();
        createPostScreen.searchUploadImageUnsplash(data.imageUnsplash);
        createPostScreen.clickUpdatePost();
        createPostScreen.clickBackListPost();

        cy.log("THEN: Validando que el post se haya editado correctamente");
        listPostScreen.validateTitleListPage(data.titleEdit);
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

      ApiMockaroo.dataEditPost().then((data) => {
        data.forEach((item) => {
          dashboardScreen.clickCreateNewPost();
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

          cy.log("WHEN: Editando el post");
          listPostScreen.selectPostForEdit(item.title);
          createPostScreen.enterTitlePost(item.titleEdit);
          createPostScreen.enterDescriptionPost(item.descriptionEdit);
          createPostScreen.clickPageSettings();
          createPostScreen.enterExcerptPost(item.excerptEdit);
          createPostScreen.clickPageSettings();
          createPostScreen.searchUploadImageUnsplash(item.imageUnsplash);
          createPostScreen.clickUpdatePost();
          createPostScreen.clickBackListPost();

          cy.log("THEN: Validando que el post se haya editado correctamente");
          listPostScreen.validateTitleListPage(item.titleEdit);
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

      const data = {
        title: faker.lorem.words(5),
        description: faker.lorem.sentences(3),
        excerpt: faker.lorem.words(10),
        tag: faker.lorem.word(),
        titleEdit: faker.lorem.words(6),
        descriptionEdit: faker.lorem.sentences(4),
        excerptEdit: faker.lorem.words(12),
        imageUnsplash: faker.image.imageUrl(),
      };

      dashboardScreen.clickCreateNewPost();
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

      cy.log("WHEN: Editando el post");
      listPostScreen.selectPostForEdit(data.title);
      createPostScreen.enterTitlePost(data.titleEdit);
      createPostScreen.enterDescriptionPost(data.descriptionEdit);
      createPostScreen.clickPageSettings();
      createPostScreen.enterExcerptPost(data.excerptEdit);
      createPostScreen.clickPageSettings();
      createPostScreen.searchUploadImageUnsplash(data.imageUnsplash);
      createPostScreen.clickUpdatePost();
      createPostScreen.clickBackListPost();

      cy.log("THEN: Validando que el post se haya editado correctamente");
      listPostScreen.validateTitleListPage(data.titleEdit);
    });
  });
});
