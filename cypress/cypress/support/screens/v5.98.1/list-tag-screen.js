class ListTagScreen {

  elements = {
    createNewTageButton: () => cy.get('a[href="#/tags/new/"]')
  }

  clickCreateNewTag() {
    this.elements.createNewTageButton().click();
  }
}

module.exports = new ListTagScreen();