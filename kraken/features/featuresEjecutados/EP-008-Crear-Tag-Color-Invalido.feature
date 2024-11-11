Feature: create tag

@user1 @web
Scenario: Crear tag con los campos diligenciados correctamente
    #Login
    Given I navigate to page "<URL>"
        And I wait for 5 seconds
        And I enter email "<USERNAME1>"
        And I wait for 2 seconds
        And I enter password "<PASSWORD1>"
        And I wait for 2 seconds
        And I click next
        And I wait for 7 seconds
    
    #Create tag
    When I click on tags
        And I wait for 1 seconds
        And I click on new tag
        And I wait for 1 seconds
        And I click on tag name
        And I enter text "$name_2"
        And I wait for 1 seconds
        And I click on tag description
        And I wait for 1 seconds
        And I enter text "$string"
        And I wait for 1 seconds
        And I click on save
        And I wait for 5 seconds

    #Confirm tag
    Then I should see the delete tag button
