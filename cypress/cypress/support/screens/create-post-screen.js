const cypressRealEvents = require("cypress-real-events/support");


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
    updatePostButton: () => cy.get('.gh-editor-header > .gh-editor-publish-buttons ').contains('span', 'Update'),
    backListPostButton: () => cy.get('a[href="#/posts/"]').contains('span', 'Posts'),
    openImageUnsplashButton: () => cy.get('.gh-editor-feature-image-add  >  .gh-editor-feature-image-unsplash'),
    searchImageUnsplashInput: () => cy.get('.gh-unsplash-search'),
    selectedImageUnsplash: () => cy.get('.gh-unsplash-photo'),
    chooseImageUnsplashButton: () => cy.get('.absolute > .gh-unsplash-photo > .gh-unsplash-photo-container > .gh-unsplash-photo-overlay > .gh-unsplash-photo-footer > .gh-unsplash-button')
  }

  enterTitlePost(title) {
    this.elements.titlePostInput().clear();
    this.elements.titlePostInput().type(title);
  }

  enterDescriptionPost(description) {
    this.elements.descriptionPostInput().clear();
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

<<<<<<< HEAD
  clickUpdatePost() {
    this.elements.updatePostButton().click();
  }

  clickBackListPost() {
    this.elements.backListPostButton().click();
  }

  searchUploadImageUnsplash(image) {
    this.elements.openImageUnsplashButton().click();
    this.elements.searchImageUnsplashInput().type(image);
    this.elements.selectedImageUnsplash().first().click();
    cy.wait(2000);
    this.elements.chooseImageUnsplashButton().click();
=======
  clickUploadImage() {
    this.elements.uploadImageButton().click();
>>>>>>> 69eeb774e85c687c523bed1db8027614247e6e7a
  }
}

module.exports = new CreatePostScreen();