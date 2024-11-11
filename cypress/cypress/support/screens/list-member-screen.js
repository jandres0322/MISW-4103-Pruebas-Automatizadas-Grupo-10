class ListMemberScreen {

  pathFileCsv = "cypress/support/files/member-import-template.csv"

  elements = {
    createNewMemberButton: () => cy.get("a[href='#/members/new/']").contains("span", "New member"),
    settingListMemberButton: () => cy.get('.members-actions-dropdown > button'),
    importMemberButton: () => cy.get("a[href='#/members/import/']"),
    loadFileCsvInput: () => cy.get("input[type=file]").eq(0),
    confirmImportMemberButton: () => cy.get('.gh-btn-green > span'),
    closeModalImportMemberButton: () => cy.get('.gh-btn-black > span'),
    textImportSuccess: () => cy.get('h1'),
  }

  clickCreateNewMember() {
    this.elements.createNewMemberButton().click();
  }

  clickSettingListMember() {
    this.elements.settingListMemberButton().click();
  }

  clickImportMember() {
    this.elements.importMemberButton().click();
  }

  loadFileCSV() {
    this.elements.loadFileCsvInput().selectFile(this.pathFileCsv, { force: true });
  }

  validateNumbersMembers() {
    this.elements.confirmImportMemberButton().should("contain.text", "2")
    this.elements.confirmImportMemberButton().click();
  }

  validateMembersToUpload() {
    this.elements.textImportSuccess().should("contain.text", "Import in progress");
    this.elements.closeModalImportMemberButton().click();
  }

}

module.exports = new ListMemberScreen();