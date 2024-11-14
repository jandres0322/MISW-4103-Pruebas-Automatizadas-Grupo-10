Feature: Crear Cuenta en Ghost

@EP002 @user1 @web
Scenario: Crear cuenta en Ghost con campos del registro vacíos
    And I wait for 7 seconds
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
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
  When I enter name member "<NAMEVACIO>"
    And I wait for 2 seconds
    And I enter emailinvalido member "<EMAIVACIO>"
    And I wait for 2 seconds
    And I click save member
    And I wait for 7 seconds
    And I take one screenshot "./artefacts/version1/EP001/field_members.png"
  Then I should see the error message "Please enter an email."
    And I wait for 5 seconds
    And I take one screenshot "./artefacts/version1/EP001/menj_error_members.png"
    