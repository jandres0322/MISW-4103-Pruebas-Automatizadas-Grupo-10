class DashboardScreen {

  elements = {
    titleSite: () => cy.get(".gh-nav-menu-details-sitetitle"),
    createNewPostButton: () => cy.get("a[title='New post']"),
    listPageButton: () => cy.get("a[data-test-nav='pages']"),
  }

  validateTitleSite(title) {
    this.elements.titleSite().should("contain.text", title);
  }

  validateUrlDashboard() {
    cy.url().should("include", "dashboard");
  }

  clickCreateNewPost() {
    this.elements.createNewPostButton().click();
  }

  clickListPage() {
    this.elements.listPageButton().click();
  }
}

module.exports = new DashboardScreen();