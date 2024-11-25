class CreateTagScreen {
  elements = {
    nameInput: () => cy.get("#tag-name"),
    colorInput: () => cy.get('.input-color > input[name="accent-color"]'),
    slugInput: () => cy.get("#tag-slug"),
    descriptionInput: () => cy.get("#tag-description"),
    saveTagButton: () => cy.get("button[data-test-button='save']"),
    errorMessage: () => cy.get(".error > .response"),
    titleTag: () => cy.get(".gh-canvas-title"),
    backToTagsList: () => cy.get("a[href='#/tags/']").eq(0),
  };

  enterName(name) {
    this.elements.nameInput().type(name ?? " ");
  }

  enterColor(color) {
    this.elements.colorInput().type(color ?? " ");
  }

  enterSlug(slug) {
    this.elements.slugInput().type(slug ?? " ");
  }

  enterDescription(description) {
    this.elements.descriptionInput().type(description ?? " ");
  }

  clickSaveTag() {
    this.elements.saveTagButton().click();
  }

  validateErrorMessage() {
    this.elements.errorMessage().should("contain", message);
  }

  validateTitleTag(title) {
    this.elements.titleTag().should("contain", title);
  }

  fixHexColor(color) {
    return color.replace("#", "");
  }

  backToTagsList() {
    this.elements.backToTagsList().click();
  }

  cleanForm() {
    this.elements.nameInput().clear();
    this.elements.colorInput().clear();
    this.elements.slugInput().clear();
    this.elements.descriptionInput().clear();
  }
}

module.exports = new CreateTagScreen();
