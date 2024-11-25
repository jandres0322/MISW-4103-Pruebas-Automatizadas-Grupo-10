const loginScreen = require("../../support/screens/v5.98.1/login-screen");
const dashboardScreen = require("../../support/screens/v5.98.1/dashboard-screen");
const listPageScreen = require("../../support/screens/v5.98.1/list-page-screen");
const createPageScreen = require("../../support/screens/v5.98.1/create-page-screen");
const MakeScreenShot = require("../../support/utils/make-screenshot");
const mockCreatePageValid = require("../../fixtures/data/create-page-valid.json");
const { ApiMockaroo } = require("../../support/utils/api-mockaroo");
const { faker } = require("@faker-js/faker");

describe("EP-006: Crear página diligenciando todos los campos correctamente", () => {
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
      dashboardScreen.validateTitleSite(loginData.userLogin.site);
      dashboardScreen.clickListPage();

      mockCreatePageValid.forEach((data) => {
        listPageScreen.clickCreateNewPage();
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
        listPageScreen.validateTitleListPage(data.title);
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
      dashboardScreen.validateTitleSite(loginData.userLogin.site);
      dashboardScreen.clickListPage();

      ApiMockaroo.dataValidCreatePage().then((data) => {
        data.forEach((item) => {
          listPageScreen.clickCreateNewPage();
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
          listPageScreen.validateTitleListPage(item.title);
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
      dashboardScreen.validateTitleSite(loginData.userLogin.site);
      dashboardScreen.clickListPage();

      const data = {
        title: faker.lorem.words(5),
        description: faker.lorem.words(50),
        tag: faker.lorem.word(),
        excerpt: faker.lorem.words(10),
      };

      listPageScreen.clickCreateNewPage();
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
      listPageScreen.validateTitleListPage(data.title);
    });
  });
});
