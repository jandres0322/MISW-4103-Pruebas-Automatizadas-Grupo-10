class CreatePageScreen {

  elements = {
    titlePageInput: () => cy.get("textarea[data-test-editor-title-input]"),
    descriptionPageInput: () => cy.get("[data-secondary-instance='false'] > .koenig-lexical > [data-kg='editor'] > .kg-prose > p"),
    tagSelect: () => cy.get("#tag-input"),
    tagSelectOption: () => cy.get(".ember-power-select-option"),
    pageSettingsButton: () => cy.get("button[data-test-psm-trigger]"),
    excerptPageInput: () => cy.get("#custom-excerpt"),
    publishButton: () => cy.get(".gh-editor-header > .gh-editor-publish-buttons > .darkgrey > span"),
    finalReviewButton: () => cy.get(".gh-publish-cta > .gh-btn > span"),
    confirmCreatePageButton: () => cy.get("button[data-test-button='confirm-publish']"),
    closeModalButton: () => cy.get("button[data-test-button='close-publish-flow']")
  }

  enterTitlePage(title) {
    this.elements.titlePageInput().type(title ?? " ");
  }

  enterDescriptionPage(description) {
    this.elements.descriptionPageInput().type(description);
  }

  enterExcerptPage(excerpt) {
    this.elements.excerptPageInput().type(excerpt, { force: true });
  }

  selectTag(tag) {
    this.elements.tagSelect().type(tag);
    this.elements.tagSelectOption().contains(tag).click();
  }

  clickPageSettings() {
    this.elements.pageSettingsButton().click();
  }

  clickPublish() {
    this.elements.publishButton().click();
  }

  clickFinalReview() {
    this.elements.finalReviewButton().click();
  }

  clickConfirmCreatePage() {
    this.elements.confirmCreatePageButton().click();
  }

  clickCloseModal() {
    this.elements.closeModalButton().click();
  }
}

module.exports = new CreatePageScreen();