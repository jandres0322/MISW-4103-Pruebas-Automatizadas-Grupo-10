Feature: Crear Cuenta en Ghost

@EP002 @user1 @web
Scenario: Crear cuenta en Ghost con correo electronico invalido
    And I wait for 7 seconds
  Given I navigate to page "<URL>"
    And I wait for 5 seconds
    And I enter email "<USERNAME1>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD1>"
    And I wait for 2 seconds
    And I take one screenshot "./artefacts/version1/EP002/login.png"
    And I click next
    And I wait for 7 seconds
    And I take one screenshot "./artefacts/version1/EP002/dashboard.png"
    And I click Members
    And I wait for 5 seconds
    And I take one screenshot "./artefacts/version1/EP002/page_members.png"
    And I click New Members
    And I wait for 5 seconds
    And I take one screenshot "./artefacts/version1/EP002/form_members.png"
  When I enter name member "<NAME1>"
    And I wait for 2 seconds
    And I enter emailinvalido member "<EMAILINVALIDO>"
    And I wait for 2 seconds
    And I enter note member "<NOTE1>"
    And I wait for 2 seconds
    And I click save member
    And I wait for 7 seconds
    And I take one screenshot "./artefacts/version1/EP002/field_members.png"
  Then I should see the error message "Invalid Email."
    And I wait for 5 seconds
    And I take one screenshot "./artefacts/version1/EP002/menj_error_members.png"
    