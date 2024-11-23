const registerScreen = require("../../support/screens/v5.98.1/register-screen");
const mockUserRegister = require("../../fixtures/data/user-register.json");
const { ApiMockaroo } = require("../../support/utils/api-mockaroo");
const { faker } = require("@faker-js/faker");

describe("EP-001: Crear cuenta en Ghost con campos del registro vacíos", () => {
  beforeEach(() => {
    cy.log("Ingresando a Ghost");
    cy.visit(Cypress.env("apiUrl"));
  });

  it("Ejecución escenario - Pool de datos a-priori", () => {
    mockUserRegister.forEach((data) => {
      registerScreen.enterSiteTitle(data.site);
      registerScreen.enterFullName(data.name);
      registerScreen.enterEmailAddress(data.email);
      registerScreen.enterPassword(data.password);
      registerScreen.clickCreateAccount();
      registerScreen.validateErrorMain();
    });
  });

  it("Ejecución escenario - Pool de datos aleatorio dinámico", () => {
    ApiMockaroo.dataWrongRegisterUser().then((data) => {
      data.forEach((item) => {
        registerScreen.enterSiteTitle(item.site);
        registerScreen.enterFullName(item.name);
        registerScreen.enterEmailAddress(item.email);
        registerScreen.enterPassword(item.password);
        registerScreen.clickCreateAccount();
        registerScreen.validateErrorMain();
      });
    });
  });

  it("Ejecución escenario - Escenario aleatorio", () => {
    const data = {
      site: faker.lorem.words(1),
      name: faker.person.fullName(),
      email: faker.internet.email().split("@")[0],
      password: faker.internet.password()[4],
    };
    registerScreen.enterSiteTitle(data.site);
    registerScreen.enterFullName(data.name);
    registerScreen.enterEmailAddress(data.email);
    registerScreen.enterPassword(data.password);
    registerScreen.clickCreateAccount();
    registerScreen.validateErrorMain();
  });
});
