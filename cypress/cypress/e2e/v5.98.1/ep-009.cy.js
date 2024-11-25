const loginScreen = require("../../support/screens/v5.98.1/login-screen");
const dashboardScreen = require("../../support/screens/v5.98.1/dashboard-screen");
const listTagScreen = require("../../support/screens/v5.98.1/list-tag-screen");
const parametersLogin = require("../../fixtures/data/parameters-login.json");
const mockTagPage =  require("../../fixtures/data/create-tag-success.json");
const createTagScreen = require("../../support/screens/v5.98.1/create-tag-screen");
const { ApiMockaroo } = require("../../support/utils/api-mockaroo");
const { faker } = require("@faker-js/faker");

describe("EP-009: Crear tag con los campos diligenciados correctamente", () => {
  beforeEach(() => {
    cy.log("Ingresando a Ghost");
    cy.visit(Cypress.env("apiUrl"));
    loginScreen.enterEmail(parametersLogin.email);
    loginScreen.enterPassword(parametersLogin.password);
    loginScreen.clickSubmit();
    dashboardScreen.validateUrlDashboard();
    cy.wait(2000);
    dashboardScreen.clickListTag();
    listTagScreen.clickCreateNewTag();
  });

  it("Ejecución escenario - Pool de datos a-priori", () => {
    mockTagPage.forEach((data) => {
      createTagScreen.enterName(data.name);
      data.color = createTagScreen.fixHexColor(data.color);
      createTagScreen.enterColor(data.color);
      createTagScreen.enterSlug(data.slug);
      createTagScreen.enterDescription(data.description);
      createTagScreen.clickSaveTag();
      createTagScreen.validateTitleTag(data.name);
      createTagScreen.backToTagsList();
      listTagScreen.clickCreateNewTag();
    });
  });

  it("Ejecución escenario - Pool de datos aleatorio dinánico", () => {
    ApiMockaroo.dataCreateTagSuccess().then((data) => {
      data.forEach((item) => {
        createTagScreen.enterName(item.name);
        item.color = createTagScreen.fixHexColor(item.color);
        createTagScreen.enterColor(item.color);
        createTagScreen.enterSlug(item.slug);
        createTagScreen.enterDescription(item.description);
        createTagScreen.clickSaveTag();
        createTagScreen.validateTitleTag(item.name);
        createTagScreen.backToTagsList();
        listTagScreen.clickCreateNewTag();
      });
    });
  });

  it("Ejecución escenario - Escenario aleatorio", () => {
    const data = {
      name: faker.lorem.words(1),
      color: faker.internet.color(),
      slug: faker.lorem.word(1),
      description: faker.string.alpha(),
    };

    createTagScreen.enterName(data.name);
    data.color = createTagScreen.fixHexColor(data.color);
    createTagScreen.enterColor(data.color);
    createTagScreen.enterSlug(data.slug);
    createTagScreen.enterDescription(data.description);
    createTagScreen.clickSaveTag();
    createTagScreen.validateTitleTag(data.name);
    createTagScreen.backToTagsList();
    listTagScreen.clickCreateNewTag();
  });

  it("Ejecución escenario - Escenario aleatorio", () => {
    const data = {
      name: faker.lorem.word(1),
      color: faker.internet.color(),
      slug: faker.lorem.word(3),
      description: faker.string.alpha(500),
    };

    createTagScreen.enterName(data.name);
    data.color = createTagScreen.fixHexColor(data.color);
    createTagScreen.enterColor(data.color);
    createTagScreen.enterSlug(data.slug);
    createTagScreen.enterDescription(data.description);
    createTagScreen.clickSaveTag();
    createTagScreen.validateTitleTag(data.name);
    createTagScreen.backToTagsList();
    listTagScreen.clickCreateNewTag();
  });

});