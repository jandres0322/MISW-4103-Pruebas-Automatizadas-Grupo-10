
class MakeScreenShot {

  constructor(version) {
    this.versionGhost = version;
  }

  execute(fileName) {
    cy.wait(3000);
    cy.screenshot(`v${this.versionGhost}-${Cypress.currentTest.titlePath.join("/")}/${fileName}`);
  }
}

module.exports = MakeScreenShot;