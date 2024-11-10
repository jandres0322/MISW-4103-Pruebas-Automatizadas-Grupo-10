Feature: Crear Cuenta en Ghost

@EP002 @user1 @web
Scenario: Crear cuenta en Ghost con correo electronico invalido
    And I wait for 7 seconds
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 5 seconds
    And I enter email "<USERNAME1>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD1>"
    And I wait for 2 seconds
    And I click next
    And I wait for 7 seconds
    And I click Members
    And I wait for 5 seconds
    And I click New Members
    And I wait for 5 seconds
  When I enter name member "<NAME1>"
    And I wait for 2 seconds
    And I enter emailinvalido member "<EMAILINVALIDO>"
    And I wait for 2 seconds
    And I enter note member "<NOTE1>"
    And I wait for 2 seconds
    And I click save member
    And I wait for 7 seconds
  Then I should see the error message "Invalid Email."
    