Feature: Crear Cuenta en Ghost

@EP002 @user1 @web
Scenario: Crear cuenta en Ghost con campos del registro vacíos
    And I wait for 7 seconds
  Given I navigate to page "<URLv2>"
    And I wait for 10 seconds
    And I enter email v2 "<USERNAME1v2>"
    And I wait for 5 seconds
    And I enter password v2 "<PASSWORD1v2>"
    And I take one screenshot "./artefacts/version2/EP001/login.png"
    And I wait for 2 seconds
    And I click next
    And I wait for 7 seconds
    And I take one screenshot "./artefacts/version2/EP001/dashboard.png"
    And I click Members
    And I wait for 5 seconds
    And I click New Members
    And I wait for 5 seconds
  When I enter name member "<NAMEVACIO>"
    And I wait for 2 seconds
    And I enter emailinvalido member "<EMAIVACIO>"
    And I wait for 2 seconds
    And I click save member
    And I wait for 7 seconds
  Then I should see the error message "Please enter an email."
    