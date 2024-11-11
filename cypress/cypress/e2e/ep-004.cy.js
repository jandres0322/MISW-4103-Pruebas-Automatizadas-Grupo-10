const registerScreen = require("../support/screens/register-screen");
const dashboardScreen = require("../support/screens/dashboard-screen");

describe("EP-004: Crear cuenta en Ghost con campos del registro vacíos", () => {
  beforeEach(() => {
    cy.log("Ingresando a Ghost");
    cy.visit(Cypress.env("apiUrl"));
  });

  it("Ejecución", () => {

    cy.log("GIVEN: Cargando datos de usuario")
    cy.fixture("user-register").then((data) => {

      cy.log("WHEN: Ingresando datos de usuario en el formulario de registro");
      
      registerScreen.clickCreateAccount();

      cy.log("THEN: Validando mensaje de error en el campo de email");
      registerScreen.validateErrorMain(data.userEmptyFields.errorMessageMain);
    });
  });
});
