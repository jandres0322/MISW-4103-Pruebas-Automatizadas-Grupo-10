class ListPostScreen {

    elements = {
      titleListPage: () => cy.get(".gh-content-entry-title"),
    }
  
    validateTitleListPage(title) {
      this.elements.titleListPage().contains(title);
    }

    selectPostForEdit(title) {
      cy.contains(title).click({force: true});
    }
    
  }
  
  module.exports = new ListPostScreen();