class CreatePageScreen {

  elements = {
    titlePageInput: () => cy.get("textarea[data-test-editor-title-input]"),
    descriptionPageInput: () => cy.get('[data-secondary-instance="false"] > .koenig-lexical > [data-kg="editor"] > .kg-prose > p'),
    tagSelect: () => cy.get("#tag-input"),
    pageSettingsButton: () => cy.get("button[data-test-psm-trigger]")
  }

  enterTitlePage(title) {
    this.elements.titlePageInput().type(title);
  }

  enterDescriptionPage(description) {
    this.elements.descriptionPageInput().type(description);
  }

  selectTag(tag) {
    this.elements.tagSelect().type(tag).select();
  }

  clickPageSettings() {
    this.elements.pageSettingsButton().click();
  }
}

module.exports = new CreatePageScreen();