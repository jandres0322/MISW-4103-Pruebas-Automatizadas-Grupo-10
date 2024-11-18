class MakeScreenShot {

  constructor(version, describeTitle) {
    this.versionGhost = version;
    this.describeTitle = describeTitle;
  }

  execute(fileName) {
    cy.wait(3000);
    const screenshotPath = `v${this.versionGhost}/${this.describeTitle[0]}/${fileName}`;
    cy.screenshot(screenshotPath);
  }
}

module.exports = MakeScreenShot;
