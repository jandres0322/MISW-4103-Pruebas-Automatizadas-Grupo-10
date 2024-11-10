class ListPostScreen {

    elements = {
      titleListPage: () => cy.get(".gh-content-entry-title")
    }
  
    validateTitleListPage(title) {
      this.elements.titleListPage().contains(title);
    }
    
  }
  
  module.exports = new ListPostScreen();