Feature: Crear Cuenta en Ghost

@EP002 @user1 @web
Scenario: No debe agregar miembro con datos peligrosos en name
    And I wait for 7 seconds
  Given I navigate to page "<URL>"
    And I wait for 5 seconds
    And I enter email "<USERNAME1>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD1>"
    And I wait for 2 seconds
    And I take one screenshot "./artefacts/version1/EP001/login.png"
    And I click next
    And I wait for 7 seconds
    And I take one screenshot "./artefacts/version1/EP001/dashboard.png"
    And I click Members
    And I wait for 5 seconds
    And I take one screenshot "./artefacts/version1/EP001/page_members.png"
    And I click New Members
    And I wait for 5 seconds
    And I take one screenshot "./artefacts/version1/EP001/form_members.png"
  When I fetch data from Mockaroo API "https://my.api.mockaroo.com/ghost_member.json?key=e7ea47e0" not allowed warning
    And I take one screenshot "./artefacts/version1/EP001/field_members.png"
    And I click save member
    And I wait for 3 seconds
  Then I should see Please Enter an Warning
    And I wait for 5 seconds
    And I take one screenshot "./artefacts/version1/EP001/menj_error_members.png"