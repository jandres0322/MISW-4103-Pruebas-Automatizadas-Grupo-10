class ListPageScreen {

  elements = {
    titleInput: () => cy.get("textarea[data-test-editor-title-input]"),
    descriptionInput: () => cy.get(""),
    createNewPageButton: () => cy.get("a[data-test-new-page-button]"),
  }

  clickCreateNewPage() {
    this.elements.createNewPageButton().click();
  }
  
}

module.exports = new ListPageScreen();