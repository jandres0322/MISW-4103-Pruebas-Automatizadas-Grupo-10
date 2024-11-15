Feature: Crear un post con todos los campos diligenciados

@EP012 @user1 @web
Scenario: Crear un post con todos los campos diligenciados
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