class ListPostScheduledScreem {

  elements = {
    titleListPost: () => cy.get('.gh-content-entry-title'),
    scheduledTextPost: () => cy.get('.gh-content-entry-status > .scheduled')
  }

  validateTitleListPost(title) {
    this.elements.titleListPost().contains(title);
  }

  validateScheduledTextPost() {
    this.elements.scheduledTextPost().should('exist');
  }
}

module.exports = new ListPostScheduledScreem();