Feature: Crear pagina diligenciado todos los campos correctamente

@EP005 @user1 @web
Scenario: Crear pagina diligenciado todos los campos correctamente
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 5 seconds
    And I enter email "<USERNAME1>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD1>"
    And I wait for 2 seconds
    And I click next
    And I wait for 4 seconds
    And I click pages
    And I wait for 4 seconds
    And I click New Page
    And I wait for 4 seconds
    And I write title
    And I wait for 4 seconds
    And I write the page
    And I wait for 7 seconds
    And I click publish
    And I wait for 4 seconds
    And I click continue
    And I wait for 5 seconds
    And I click right now
    And I wait for 5 seconds

   Then I should see copy link button
    And I wait for 7 seconds
    