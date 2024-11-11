class DashboardScreen {

  elements = {
    titleSite: () => cy.get(".gh-nav-menu-details-sitetitle"),
    createNewPostButton: () => cy.get("a[title='New post']"),
    listPageButton: () => cy.get('li > a[href="#/pages/"]'),
    listTagButton: () => cy.get('li > a[href="#/tags/"'),
    listPostScheduledButton: () => cy.get('li > a[href="#/posts/?type=scheduled"'),
    listPostButton: () => cy.get('li > a[href="#/posts/"]')
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

  clickListTag() {
    this.elements.listTagButton().click();
  }

  clickListPostScheduled() {
    this.elements.listPostScheduledButton().click();
  }

  clickListPost() {
    this.elements.listPostButton().click();
  }
}

module.exports = new DashboardScreen();