class ListMemberScreen {

  elements = {
    createNewMemberButton: () => cy.get("a[href='#/members/new/']").contains("span", "New member"),
  }

  clickCreateNewMember() {
    this.elements.createNewMemberButton().click();
  }
}

module.exports = new ListMemberScreen();