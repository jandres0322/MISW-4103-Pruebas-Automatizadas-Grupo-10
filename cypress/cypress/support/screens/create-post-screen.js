class CreatePostScreen {
  elements = {
    titlePostInput: () => cy.get('textarea[placeholder="Post title"]'),
    descriptionPostInput: () => cy.get('[data-secondary-instance="false"] > .koenig-lexical > [data-kg="editor"] > .kg-prose > p'),
    postSettingsButton: () => cy.get("button[data-test-psm-trigger]"),
    tagSelect: () => cy.get("#tag-input"),
    tagSelectOption: () => cy.get(".ember-power-select-option"),
    excerptPostInput: () => cy.get("#custom-excerpt"),
    publishButton: () => cy.get('.gh-editor-header > .gh-editor-publish-buttons > .darkgrey > span'),
    scheduledDropdownButton: () => cy.get('.last > .gh-publish-setting-title'),
    selectScheduledButton: () => cy.get('.gh-radio').contains('label', 'Schedule for later'),
    finalReviewButton:() => cy.get('.gh-publish-cta > .gh-btn > span'),
    confirmCreatePostButon: () => cy.get('div.gh-publish-cta > button.gh-btn-pulse'),
    closeModalButton: () => cy.get("button[data-test-button='close-publish-flow']"),
    uploadImageButton: () => cy.get('.gh-editor-feature-image-add-button')
  }

  enterTitlePost(title) {
    this.elements.titlePostInput().type(title);
  }

  enterDescriptionPost(description) {
    this.elements.descriptionPostInput().type(description);
  }

  enterExcerptPost(excerpt) {
    this.elements.excerptPostInput().type(excerpt);
  }

  selectTag(tag) {
    this.elements.tagSelect().type(tag);
    this.elements.tagSelectOption().contains(tag).click();
  }

  clickPageSettings() {
    this.elements.postSettingsButton().click();
  }

  clickPublish() {
    this.elements.publishButton().click();
  }

  clickScheduledDropdown() {
    this.elements.scheduledDropdownButton().click();
  }

  clickSelectScheduled() {
    this.elements.selectScheduledButton().click();
  }

  clickFinalReview() {
    this.elements.finalReviewButton().click();
  }

  clickConfirmCreatePost() {
    this.elements.confirmCreatePostButon().click();
  }

  clickCloseModal() {
    this.elements.closeModalButton().click();
  }

  clickUploadImage() {
    this.elements.uploadImageButton().click();
  }
}

module.exports = new CreatePostScreen();