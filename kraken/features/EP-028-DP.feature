Feature: create tag

@user1 @web
Scenario:  En editar del tag y en Meta Data, con dato no url en Meta Canonical URL, debe mostrar un mensaje de dato no valido: 'The url should be a valid url'.
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
    When I fetch data from Mockaroo API "https://my.api.mockaroo.com/ghost_tags_meta.json?key=e7ea47e0" tags meta data edit url not valid meta url
        And I wait for 10 seconds
        And I click on save
        And I wait for 15 seconds

    #Confirm tag
    Then I should see Please Enter an mensaje "The url should be a valid url"
    #Create tag
    