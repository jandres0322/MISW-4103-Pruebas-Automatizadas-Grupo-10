Feature: create tag

@user1 @web
Scenario:  En editar del tag, con nombre de tag entre 1 -190,  debe dejar editar
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
        And I select the first tag
        And I wait for 1 seconds

    #CreEditeate tag
    When I fetch data from Mockaroo API "https://my.api.mockaroo.com/ghost_tags_meta.json?key=e7ea47e0" tags edit mayor 191 slug
        And I wait for 10 seconds
        And I click on save
        And I wait for 15 seconds

    #Confirm tag
    Then I should see Please Enter an mensaje "URL cannot be longer than 191 characters."
    #Create tag
    