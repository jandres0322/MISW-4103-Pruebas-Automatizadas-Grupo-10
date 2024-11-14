Feature: Crear Cuenta en Ghost

@EP002 @user1 @web
Scenario: Crear cuenta en Ghost con campos del registro vacíos
  Given I navigate to page "<URLv2>"
    And I wait for 5 seconds
    And I enter email v2 "<USERNAME1v2>"
    And I wait for 2 seconds
    And I enter password v2 "<PASSWORD1v2>"
    And I wait for 2 seconds
    And I take one screenshot "./artefacts/version2/EP001/login.png"
    And I click next v2
    And I wait for 7 seconds
    And I take one screenshot "./artefacts/version2/EP001/dashboard.png"
    And I click Members v2
    And I wait for 5 seconds
    And I take one screenshot "./artefacts/version2/EP001/page_members.png"
    And I click New Members v2
    And I wait for 5 seconds
    And I take one screenshot "./artefacts/version2/EP001/form_members.png"
  When I enter name member "<NAMEVACIO>"
    And I wait for 2 seconds
    And I enter emailinvalido member "<EMAIVACIO>"
    And I wait for 2 seconds
    And I click save member v2
    And I wait for 7 seconds
    And I take one screenshot "./artefacts/version2/EP001/field_members.png"
  Then I should see the error message v2 "Please enter an email."
    And I wait for 5 seconds
    And I take one screenshot "./artefacts/version2/EP001/menj_error_members.png"
   