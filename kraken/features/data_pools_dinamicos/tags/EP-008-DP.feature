Feature: create tag

@user1 @web
Scenario: No debe agregar tags con descripción mayor a 500 caracteres
    #Login
    Given I navigate to page "<URL>"
        And I wait for 5 seconds
        And I enter email "<USERNAME1>"
        And I wait for 2 seconds
        And I enter password "<PASSWORD1>"
        And I wait for 2 seconds
        And I click next
        And I wait for 7 seconds
        And I click on tags
        And I wait for 1 seconds
        And I click on new tag
        And I wait for 1 seconds
    #Create tag
    When I fetch data from Mockaroo API "https://my.api.mockaroo.com/ghost_tags.json?key=e7ea47e0" tags not allowed warning
        And I click on save
        And I wait for 5 seconds

    #Confirm tag
    Then I should see Please Enter an mensaje "Description cannot be longer than 500 characters."
    #Create tag
