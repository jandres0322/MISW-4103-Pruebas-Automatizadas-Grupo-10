const registerScreen = require("../../support/screens/v5.98.1/register-screen");
const MakeScreenShot = require("../../support/utils/make-screenshot");
const mockUserRegisterInvalidEmail = require("../../fixtures/data/user-register-invalid-email.json");
const { ApiMockaroo } = require("../../support/utils/api-mockaroo");
const { faker } = require("@faker-js/faker");

describe("EP-002: Crear cuenta en Ghost con correo electrónico inválido", () => {
  beforeEach(() => {
    cy.log("Ingresando a Ghost");
    cy.visit(Cypress.env("apiUrl"));
  });

  it("Ejecución escenario - Pool de datos a-priori", () => {
    const makeScreenShot = new MakeScreenShot(Cypress.env("ghostVersionReleaseCandidate"), Cypress.currentTest.titlePath);

    mockUserRegisterInvalidEmail.forEach((data) => {
      cy.log("WHEN: Ingresando datos de usuario en el formulario de registro");
      makeScreenShot.execute("beforeRegister");
      registerScreen.enterSiteTitle(data.site);
      registerScreen.enterFullName(data.name);
      registerScreen.enterEmailAddress(data.email);
      registerScreen.enterPassword(data.password);
      makeScreenShot.execute("fillForm");
      registerScreen.clickCreateAccount();

      cy.log("THEN: Validando mensaje de error en el campo de email");
      registerScreen.validateErrorMain(data.errorMessageMain);
      makeScreenShot.execute("validateError");
      registerScreen.cleanForm();
    });
  });

  it("Ejecución escenario - Pool de datos aleatorio dinámico", () => {
    const makeScreenShot = new MakeScreenShot(Cypress.env("ghostVersionReleaseCandidate"), Cypress.currentTest.titlePath);

    ApiMockaroo.dataInvalidEmailRegisterUser().then((data) => {
      data.forEach((item) => {
        cy.log("WHEN: Ingresando datos de usuario en el formulario de registro");
        makeScreenShot.execute("beforeRegister");
        registerScreen.enterSiteTitle(item.site);
        registerScreen.enterFullName(item.name);
        registerScreen.enterEmailAddress(item.email);
        registerScreen.enterPassword(item.password);
        makeScreenShot.execute("fillForm");
        registerScreen.clickCreateAccount();

        cy.log("THEN: Validando mensaje de error en el campo de email");
        registerScreen.validateErrorMain(item.errorMessageMain);
        makeScreenShot.execute("validateError");
        registerScreen.cleanForm();
      });
    });
  });

  it("Ejecución escenario - Escenario aleatorio", () => {
    const makeScreenShot = new MakeScreenShot(Cypress.env("ghostVersionReleaseCandidate"), Cypress.currentTest.titlePath);

    const data = {
      site: faker.lorem.words(1),
      name: faker.person.fullName(),
      email: faker.lorem.word() + "invalid", // Generar un correo no válido
      password: faker.internet.password(),
      errorMessage: "Email is invalid",
      errorMessageMain: "Please fix the errors below",
    };

    cy.log("WHEN: Ingresando datos de usuario en el formulario de registro");
    makeScreenShot.execute("beforeRegister");
    registerScreen.enterSiteTitle(data.site);
    registerScreen.enterFullName(data.name);
    registerScreen.enterEmailAddress(data.email);
    registerScreen.enterPassword(data.password);
    makeScreenShot.execute("fillForm");
    registerScreen.clickCreateAccount();

    cy.log("THEN: Validando mensaje de error en el campo de email");
    registerScreen.validateErrorMain(data.errorMessageMain);
    makeScreenShot.execute("validateError");
  });
});
