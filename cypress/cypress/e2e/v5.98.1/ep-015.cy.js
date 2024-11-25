const loginScreen = require("../../support/screens/v5.98.1/login-screen");
const dashboardScreen = require("../../support/screens/v5.98.1/dashboard-screen");
const createPostScreen = require("../../support/screens/v5.98.1/create-post-screen");
const listPostScreen = require("../../support/screens/v5.98.1/list-post-screen");
const listTagScreen = require("../../support/screens/v5.98.1/list-tag-screen");
const createTagScreen = require("../../support/screens/v5.98.1/create-tag-screen");
const parametersLogin = require("../../fixtures/data/parameters-login.json");
const { ApiMockaroo } = require("../../support/utils/api-mockaroo");
const { faker } = require("@faker-js/faker");
const mockCreateTag = require("../../fixtures/data/create-tag.json");
const mockCreatePost = require("../../fixtures/data/create-post.json");

describe("EP-015: Editar post agregando tag creado previamente", () => {
  beforeEach(() => {
    cy.log("Ingresando a Ghost");
    cy.visit(Cypress.env("apiUrl"));
    loginScreen.enterEmail(parametersLogin.email);
    loginScreen.enterPassword(parametersLogin.password);
    loginScreen.clickSubmit();
    dashboardScreen.validateUrlDashboard();
    cy.wait(2000);
  });

  it("Ejecución escenario - Pool de datos a-priori", () => {
    mockCreatePost.forEach((data) => {
      dashboardScreen.clickListTag();+
      listTagScreen.clickCreateNewTag();
      createTagScreen.enterName(data.tag);
      createTagScreen.enterDescription(data.description);
      createTagScreen.enterColor(data.color);
      createTagScreen.enterSlug(data.title);
      createTagScreen.clickSaveTag();
      cy.wait(2000);
      dashboardScreen.clickCreateNewPost();
      createPostScreen.enterTitlePost(data.title);
      createPostScreen.enterDescriptionPost(data.description);
      createPostScreen.clickPageSettings();
      createPostScreen.selectTag(data.tag);
      createPostScreen.enterExcerptPost(data.excerpt);
      createPostScreen.clickPageSettings();
      createPostScreen.clickPublish();
      createPostScreen.clickFinalReview();
      createPostScreen.clickConfirmCreatePost();
      createPostScreen.clickCloseModal();
    });
  });

  it("Ejecución escenario - Pool de datos aleatorio dinámico", () => {
    ApiMockaroo.dataCreatePostScheduled().then((data) => {
      const length = data.length;
      data.forEach((item, i) => {
        dashboardScreen.clickListTag();
        listTagScreen.clickCreateNewTag();
        createTagScreen.enterName(item.tag);
        createTagScreen.enterDescription(item.description);
        item.color = createTagScreen.fixHexColor(item.color);
        createTagScreen.enterColor(item.color);
        createTagScreen.enterSlug(item.title);
        createTagScreen.clickSaveTag();
        cy.wait(2000);
        dashboardScreen.clickCreateNewPost();
        createPostScreen.enterTitlePost(item.title);
        createPostScreen.enterDescriptionPost(item.description);
        createPostScreen.clickPageSettings();
        createPostScreen.selectTag(item.tag);
        createPostScreen.enterExcerptPost(item.excerpt);
        createPostScreen.clickPageSettings();
        createPostScreen.clickPublish();
        createPostScreen.clickFinalReview();
        createPostScreen.clickConfirmCreatePost();
        
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
    dashboardScreen.clickListTag();
    listTagScreen.clickCreateNewTag();
    createTagScreen.enterName(data.tag);
    createTagScreen.enterDescription(data.description);
    data.color = createTagScreen.fixHexColor(faker.internet.color());
    createTagScreen.enterColor(data.color);
    createTagScreen.enterSlug(data.title);
    createTagScreen.clickSaveTag();
    cy.wait(2000);
    dashboardScreen.clickCreateNewPost();
    createPostScreen.enterTitlePost(data.title);
    createPostScreen.enterDescriptionPost(data.description);
    createPostScreen.clickPageSettings();
    createPostScreen.selectTag(data.tag);
    createPostScreen.enterExcerptPost(data.excerpt);
    createPostScreen.clickPageSettings();
    createPostScreen.clickPublish();
    createPostScreen.clickFinalReview();
    createPostScreen.clickConfirmCreatePost();
    createPostScreen.clickCloseModal()
  });
});