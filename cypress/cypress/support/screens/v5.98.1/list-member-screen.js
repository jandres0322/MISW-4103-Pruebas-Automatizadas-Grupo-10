class ListMemberScreen {

  pathFileCsv = "cypress/support/files/member-import-template.csv"
  pahtFileCsvInvalid = "cypress/support/files/member-import-template-invalid.csv"

  elements = {
    createNewMemberButton: () => cy.get("a[href='#/members/new/']").contains("span", "New member"),
    settingListMemberButton: () => cy.get('.members-actions-dropdown > button'),
    importMemberButton: () => cy.get("a[href='#/members/import/']"),
    loadFileCsvInput: () => cy.get("input[type=file]").eq(0),
    confirmImportMemberButton: () => cy.get('.gh-btn-green > span'),
    closeModalImportMemberButton: () => cy.get('.gh-btn-black > span'),
    textImportSuccess: () => cy.get('h1'),
    createAdminMemberButton: () => cy.get('.gh-members-empty > .gh-btn > span'),
    nameMemberText: () => cy.get('.gh-members-list-name').first(),
    errorMessageImportMemberText: () => cy.get('.pt2')
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

  loadFileCSV(validCsv = true) {
    this.elements.loadFileCsvInput().selectFile(
      validCsv ? this.pathFileCsv : this.pahtFileCsvInvalid, 
      { force: true });
  }

  validateNumbersMembers(number) {
    this.elements.confirmImportMemberButton().should("contain.text", number)
    this.elements.confirmImportMemberButton().click();
  }

  validateMembersToUpload() {
    this.elements.textImportSuccess().should("contain.text", "Import in progress");
    this.elements.closeModalImportMemberButton().click();
  }

  clickCreateAdminMember() {
    this.elements.createAdminMemberButton().click();
  }

  validateNameMember(name) {
    this.elements.nameMemberText().should("contain.text", name);
  }

  validateErrorMessageImportMember(text) {
    this.elements.errorMessageImportMemberText().should("contain.text", text);
  }

}

module.exports = new ListMemberScreen();