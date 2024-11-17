Feature: Crear miembro con campos invalidos

@EP016 @user1 @web
Scenario: Crear miembro con campos invalidos
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 5 seconds
    And I enter email "<USERNAME1>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD1>"
    And I wait for 2 seconds
    And I click next
    And I wait for 4 seconds
    And I click Members
    And I wait for 4 seconds
    And I click New Members
    And I wait for 4 seconds
    And I enter name member "<NAMEVACIO>"
    And I wait for 3 seconds
    And I enter emailinvalido member "<EMAILINVALIDO>"
    And I wait for 3 seconds
    And I click save member
    And I wait for 3 seconds

    Then I should see Please Enter an Email
     And I wait for 4 seconds
