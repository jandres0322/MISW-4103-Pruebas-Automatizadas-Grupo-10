Feature: Editar post agregando imagen desde unplash

@EP014 @user1 @web
Scenario: Editar post agregando imagen desde unplash
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 5 seconds
    And I enter email "<USERNAME1>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD1>"
    And I wait for 2 seconds
    And I click next
    And I wait for 4 seconds
    And I click on create post
    And I wait for 4 seconds
    And I click on unplash
    And I wait for 4 seconds
    And I fill the search photo field
    And I wait for 4 seconds
    And I click on Insert Image
    And I wait for 5 seconds
    And I write the post title
    And I wait for 4 seconds
    And I write the body of the post
    And I wait for 4 seconds
    And I click publish
    And I wait for 3 seconds
    And I click continue
    And I wait for 4 seconds
    And I click right now
    And I wait for 4 seconds

   Then I should see copy link button
    And I wait for 7 seconds