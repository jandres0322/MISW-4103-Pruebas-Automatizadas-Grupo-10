Feature: My feature

@user1 @web
Scenario: Como primer usuario inicio sesion y mandó un mensaje al usuario 2
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
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
  When I enter email member "<EMAIL1>"
  And I wait for 2 seconds
  When I enter note member "<NOTE1>"
  And I wait for 2 seconds
  And I click save member
  And I wait for 7 seconds
  Then I should see the Created message with the date

