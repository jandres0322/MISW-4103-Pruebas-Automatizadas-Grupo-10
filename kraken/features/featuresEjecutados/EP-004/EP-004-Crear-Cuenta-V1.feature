Feature: Crear Cuenta en Ghost

@EP001 @user1 @web
Scenario: Crear cuenta en Ghost con los campos diligenciados correctamente
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 5 seconds
    And I enter email "<USERNAME1>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD1>"
    And I wait for 2 seconds
    And I take one screenshot "./artefacts/version1/EP004/login.png"
    And I click next
    And I wait for 7 seconds
    And I take one screenshot "./artefacts/version1/EP004/dashboard.png"
    And I click Members
    And I wait for 5 seconds
    And I take one screenshot "./artefacts/version1/EP004/page_members.png"
    And I click New Members
    And I wait for 5 seconds
    And I take one screenshot "./artefacts/version1/EP004/form_members.png"
  When I enter name member "<NAME1>"
    And I wait for 2 seconds
    And I enter email member "<EMAIL1>"
    And I wait for 2 seconds
    And I enter note member "<NOTE1>"
    And I wait for 2 seconds
    And I click save member
    And I wait for 7 seconds
    And I take one screenshot "./artefacts/version1/EP004/field_members.png"
  Then I see the signup info message "SIGNUP INFO"
    And I wait for 5 seconds 
    And I take one screenshot "./artefacts/version1/EP004/menj_members.png"
  

