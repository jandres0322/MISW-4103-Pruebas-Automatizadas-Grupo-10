Feature: Crear Cuenta en Ghost

@EP003 @user1 @web
Scenario: Crear cuenta en Ghost con contraseña menor a 3 caracteres
    And I wait for 7 seconds
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 5 seconds
    And I enter email "<USERNAME1>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD1>"
    And I wait for 2 seconds
    And I take one screenshot "./artefacts/version1/EP003/login.png"
    And I click next
    And I wait for 7 seconds
    And I take one screenshot "./artefacts/version1/EP003/dashboard.png"
    And I click Members
    And I wait for 5 seconds
    And I take one screenshot "./artefacts/version1/EP003/page_members.png"
    And I click New Members
    And I wait for 5 seconds
    And I take one screenshot "./artefacts/version1/EP003/form_members.png"
  When I enter name member "<NAME1>"
    And I wait for 2 seconds
    And I enter emailinvalido member "<EMAILINVALIDO>"
    And I wait for 2 seconds
    And I enter note member "<NOTE1>"
    And I wait for 2 seconds
    And I click save member
    And I wait for 7 seconds
    And I take one screenshot "./artefacts/version1/EP003/field_members.png"
  Then I should see the error message "Invalid Email."
    And I wait for 5 seconds 
    And I take one screenshot "./artefacts/version1/EP003/menj_error_members.png"
    