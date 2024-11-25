const loginScreen = require("../../support/screens/v5.98.1/login-screen");
const dashboardScreen = require("../../support/screens/v5.98.1/dashboard-screen");
const listTagScreen = require("../../support/screens/v5.98.1/list-tag-screen");
const createTagScreen = require("../../support/screens/v5.98.1/create-tag-screen");
const MakeScreenShot = require("../../support/utils/make-screenshot");
const mockTagColorInvalid = require("../../fixtures/data/create-tag-invalid-color.json");
const { ApiMockaroo } = require("../../support/utils/api-mockaroo");
const { faker } = require("@faker-js/faker");

describe("EP-008: Crear tag con campo de color inválido", () => {
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
      dashboardScreen.clickListTag();

      mockTagColorInvalid.forEach((data) => {
        listTagScreen.clickCreateNewTag();
        createTagScreen.enterName(data.name);
        createTagScreen.enterColor(data.color);
        createTagScreen.enterSlug(data.slug);
        createTagScreen.enterDescription(data.description);
        createTagScreen.clickSaveTag();

        cy.log("THEN: Se debe validar el mensaje de error");
        createTagScreen.validateErrorMessage(data.errorMessage);
        createTagScreen.cleanForm();
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
      dashboardScreen.clickListTag();

      ApiMockaroo.dataCreateTagInvalidColor().then((data) => {
        data.forEach((item) => {
          listTagScreen.clickCreateNewTag();
          createTagScreen.enterName(item.name);
          createTagScreen.enterColor(item.color);
          createTagScreen.enterSlug(item.slug);
          createTagScreen.enterDescription(item.description);
          createTagScreen.clickSaveTag();

          cy.log("THEN: Se debe validar el mensaje de error");
          createTagScreen.validateErrorMessage(item.errorMessage);
          createTagScreen.cleanForm();
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
      dashboardScreen.clickListTag();

      const data = {
        name: faker.lorem.words(2),
        color: "ZZZZZZ", // Color inválido
        slug: faker.lorem.word(),
        description: faker.lorem.sentence(),
        errorMessage: "The color code must be a valid hex color.",
      };

      listTagScreen.clickCreateNewTag();
      createTagScreen.enterName(data.name);
      createTagScreen.enterColor(data.color);
      createTagScreen.enterSlug(data.slug);
      createTagScreen.enterDescription(data.description);
      createTagScreen.clickSaveTag();

      cy.log("THEN: Se debe validar el mensaje de error");
      createTagScreen.validateErrorMessage(data.errorMessage);
    });
  });
});
