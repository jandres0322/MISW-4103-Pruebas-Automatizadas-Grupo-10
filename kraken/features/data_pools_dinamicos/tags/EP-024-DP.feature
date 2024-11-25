Feature: create tag

@user1 @web
Scenario:  En editar del tag y en Meta Data, con datos con mas de 500 catracteres en Meta descripcion, debe presetnar el mensaje:'Meta Description cannot be longer than 500 characters'
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
        And I click on expand button Meta Data
        And I wait for 4 seconds

    #CreEditeate tag
    When I fetch data from Mockaroo API "https://my.api.mockaroo.com/ghost_tags_meta.json?key=e7ea47e0" tags meta data edit not allowed max 500 meta descripcion
        And I wait for 10 seconds
        And I click on save
        And I wait for 15 seconds

    #Confirm tag
    Then I should see Please Enter an mensaje "Meta Description cannot be longer than 500 characters"
    #Create tag
    