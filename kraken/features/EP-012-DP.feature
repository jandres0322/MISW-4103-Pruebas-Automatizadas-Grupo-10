Feature: create tag

@user1 @web
Scenario: Crear tags y Meta Data con Meta title mayor a 77 caracteres
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
        And I click on expand button Meta Data
        And I wait for 4 seconds
    #Create tag
    When I fetch data from Mockaroo API "https://my.api.mockaroo.com/ghost_tags_meta.json?key=e7ea47e0" tags meta data not allowed max 70 title
        And I wait for 10 seconds
        And I click on save
        And I wait for 5 seconds

    #Confirm tag
    Then I should see the delete tag button
    #Create tag
    