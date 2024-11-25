const loginScreen = require("../../support/screens/v5.98.1/login-screen");
const dashboardScreen = require("../../support/screens/v5.98.1/dashboard-screen");
const createPostScreen = require("../../support/screens/v5.98.1/create-post-screen");
const listPostScheduledScreen = require("../../support/screens/v5.98.1/list-post-scheduled-screen");
const parametersLogin = require("../../fixtures/data/parameters-login.json");
const mockCreatePost = require("../../fixtures/data/create-post.json");
const { ApiMockaroo } = require("../../support/utils/api-mockaroo");
const { faker } = require("@faker-js/faker");


describe("EP-011: Escribir un post con todos los campos diligenciados pero programado", () => {
  beforeEach(() => {
    cy.log("Ingresando a Ghost");
    cy.visit(Cypress.env("apiUrl"));
    loginScreen.enterEmail(parametersLogin.email);
    loginScreen.enterPassword(parametersLogin.password);
    loginScreen.clickSubmit();
    dashboardScreen.validateUrlDashboard();
    cy.wait(2000);
    dashboardScreen.clickCreateNewPost();
  });

  it("Ejecución escenario - Pool de datos a-priori", () => {
    mockCreatePost.forEach((data) => {
      createPostScreen.enterTitlePost(data.title);
      createPostScreen.enterDescriptionPost(data.description);
      createPostScreen.clickPageSettings();
      createPostScreen.enterExcerptPost(data.excerpt);
      createPostScreen.selectTag(data.tag);
      createPostScreen.clickPageSettings();
      createPostScreen.clickPublish();
      createPostScreen.clickScheduledDropdown();
      createPostScreen.clickSelectScheduled();
      createPostScreen.clickFinalReview();
      createPostScreen.clickConfirmCreatePost();
      createPostScreen.clickCloseModal();
      dashboardScreen.clickListPostScheduled();
      listPostScheduledScreen.validateTitleListPost(data.title);
      listPostScheduledScreen.validateScheduledTextPost();
      dashboardScreen.clickCreateNewPost();
    });
  });

  it("Ejecución escenario - Pool de datos aleatorio dinánico", () => {

    ApiMockaroo.dataCreatePostScheduled().then((data) => {
      const length = data.length;
      const last = data[length - 1]["title"];
      data.forEach((item, i) => {
        createPostScreen.enterTitlePost(item.title);
        createPostScreen.enterDescriptionPost(item.description);
        createPostScreen.clickPageSettings();
        createPostScreen.enterExcerptPost(item.excerpt);
        createPostScreen.selectTag(item.tag);
        createPostScreen.clickPageSettings();
        createPostScreen.clickPublish();
        createPostScreen.clickScheduledDropdown();
        createPostScreen.clickSelectScheduled();
        createPostScreen.clickFinalReview();
        createPostScreen.clickConfirmCreatePost();
        createPostScreen.clickCloseModal();
        dashboardScreen.clickListPostScheduled();
        listPostScheduledScreen.validateTitleListPost(item.title);
        listPostScheduledScreen.validateScheduledTextPost();
        if (i !== length - 1) {
          dashboardScreen.clickCreateNewPost();
        }
      });
    });
  });

  it("Ejecución escenario - Escenario aleatorio", () => {
    const data = {
      title: faker.lorem.words(1),
      description: faker.lorem.words(10),
      excerpt: faker.lorem.words(10),
      tag: faker.lorem.words(1),
    };

    createPostScreen.enterTitlePost(data.title);
    createPostScreen.enterDescriptionPost(data.description);
    createPostScreen.clickPageSettings();
    createPostScreen.enterExcerptPost(data.excerpt);
    createPostScreen.selectTag(data.tag);
    createPostScreen.clickPageSettings();
    createPostScreen.clickPublish();
    createPostScreen.clickScheduledDropdown();
    createPostScreen.clickSelectScheduled();
    createPostScreen.clickFinalReview();
    createPostScreen.clickConfirmCreatePost();
    createPostScreen.clickCloseModal();
    dashboardScreen.clickListPostScheduled();
    listPostScheduledScreen.validateTitleListPost(data.title);
    listPostScheduledScreen.validateScheduledTextPost();

  });

});