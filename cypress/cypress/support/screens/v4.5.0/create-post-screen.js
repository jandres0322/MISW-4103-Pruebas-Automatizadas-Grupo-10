const cypressRealEvents = require("cypress-real-events/support");


class CreatePostScreen {

  pathImage = "cypress/support/files/image.jpeg";

  elements = {
    titlePostInput: () => cy.get('.gh-editor-title'),
    descriptionPostInput: () => cy.get('.koenig-editor__editor'),
    postSettingsButton: () => cy.get("button[title='Settings']"),
    closeSettingsButton: () => cy.get('.close'),
    tagSelect: () => cy.get('#tag-input'),
    tagSelectOption: () => cy.get('.ember-power-select-option'),
    excerptPostInput: () => cy.get('#custom-excerpt'),
    publishButton: () => cy.contains('span', 'Publish'),
    scheduledDropdownButton: () => cy.get('.gh-publishmenu-radio-button').eq(1),
    selectScheduledButton: () => cy.get('.gh-btn').contains('span', 'Schedule'),
    buttonBackListPost: () => cy.get('a[href="#/posts/"] > span'),
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

  clickCloseSettings() {
    this.elements.closeSettingsButton().click();
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

  clickBackListPost() {
    this.elements.buttonBackListPost().click();
  }
}

module.exports = new CreatePostScreen();