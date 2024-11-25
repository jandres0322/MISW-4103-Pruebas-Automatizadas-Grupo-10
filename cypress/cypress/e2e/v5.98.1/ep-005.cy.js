const loginScreen = require("../../support/screens/v5.98.1/login-screen");
const dashboardScreen = require("../../support/screens/v5.98.1/dashboard-screen");
const listPageScreen = require("../../support/screens/v5.98.1/list-page-screen");
const createPageScreen = require("../../support/screens/v5.98.1/create-page-screen");
const parametersLogin = require("../../fixtures/data/parameters-login.json");
const mockCreatePageTitleEmpty = require("../../fixtures/data/create-post-empty-title.json");
const { ApiMockaroo } = require("../../support/utils/api-mockaroo");
const { faker } = require("@faker-js/faker");

describe("EP-005: Crear pagina sin agregar el titulo de la pagina", () => {
  beforeEach(() => {
    cy.log("Ingresando a Ghost");
    cy.visit(Cypress.env("apiUrl"));
    loginScreen.enterEmail(parametersLogin.email);
    loginScreen.enterPassword(parametersLogin.password);
    loginScreen.clickSubmit();
    dashboardScreen.validateUrlDashboard();
    cy.wait(2000);
    dashboardScreen.clickListPage();
    listPageScreen.clickCreateNewPage();
  });

  it("Ejecución escenario - Pool de datos a-priori", () => {
    mockCreatePageTitleEmpty.forEach((data) => {
      createPageScreen.enterTitlePage(data.title);
      createPageScreen.enterDescriptionPage(data.description);
      createPageScreen.clickPageSettings();
      createPageScreen.selectTag(data.tag);
      createPageScreen.enterExcerptPage(data.excerpt);
      createPageScreen.clickPageSettings();
      createPageScreen.clickPublish();
      createPageScreen.clickFinalReview();
      createPageScreen.clickConfirmCreatePage();
      createPageScreen.clickCloseModal();
      listPageScreen.validateTitleListPage();
      listPageScreen.clickCreateNewPage();
    });
  });

  it("Ejecución escenario - Pool de datos aleatorio dinámico", () => {
    ApiMockaroo.dataEmptyCreatePage().then((data) => {
      data.forEach((item) => {
        createPageScreen.enterTitlePage(item.title);
        createPageScreen.enterDescriptionPage(item.description);
        createPageScreen.clickPageSettings();
        createPageScreen.selectTag(item.tag);
        createPageScreen.enterExcerptPage(item.excerpt);
        createPageScreen.clickPageSettings();
        createPageScreen.clickPublish();
        createPageScreen.clickFinalReview();
        createPageScreen.clickConfirmCreatePage();
        createPageScreen.clickCloseModal();
        listPageScreen.validateTitleListPage();
        listPageScreen.clickCreateNewPage();
      });
    });
  });

  it("Ejecución escenario - Escenario aleatorio", () => {
    const data = {
      title: null,
      description: faker.lorem.words(100),
      tag: faker.lorem.word(),
      excerpt: faker.lorem.words(1),
    };
    createPageScreen.enterTitlePage(data.title);
    createPageScreen.enterDescriptionPage(data.description);
    createPageScreen.clickPageSettings();
    createPageScreen.selectTag(data.tag);
    createPageScreen.enterExcerptPage(data.excerpt);
    createPageScreen.clickPageSettings();
    createPageScreen.clickPublish();
    createPageScreen.clickFinalReview();
    createPageScreen.clickConfirmCreatePage();
    createPageScreen.clickCloseModal();
    listPageScreen.validateTitleListPage();
  });

  it("Ejecución escenario - Escenario aleatorio", () => {
    const data = {
      title: null,
      description: faker.lorem.words(100),
      tag: faker.lorem.word(),
      excerpt: faker.lorem.word(299),
    };
    createPageScreen.enterTitlePage(data.title);
    createPageScreen.enterDescriptionPage(data.description);
    createPageScreen.clickPageSettings();
    createPageScreen.selectTag(data.tag);
    createPageScreen.enterExcerptPage(data.excerpt);
    createPageScreen.clickPageSettings();
    createPageScreen.clickPublish();
    createPageScreen.clickFinalReview();
    createPageScreen.clickConfirmCreatePage();
    createPageScreen.clickCloseModal();
    listPageScreen.validateTitleListPage();
  });
});
