Feature: Editar post agregando tag creado previamente

@EP015 @user1 @web
Scenario: Editar post agregando tag creado previamente
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 5 seconds
    And I enter email "<USERNAME1>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD1>"
    And I wait for 2 seconds
    And I click next
    And I wait for 4 seconds
    And I navigate to Posts
    And I wait for 4 seconds
    And I click in Posts Editor
    And I wait for 4 seconds
    And I click in Posts Settings
    And I wait for 4 seconds
    And I click in Tags ComboBox
    And I wait for 2 seconds
    And I select a tag
    And I wait for 4 seconds
    And I click publish
    And I wait for 3 seconds
    And I click continue
    And I wait for 4 seconds
    And I click right now
    And I wait for 4 seconds

   Then I should see copy link button
    And I wait for 7 seconds