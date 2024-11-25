Feature: create tag

@user1 @web
Scenario: No debe agregar tags con name vacío
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
    When I fetch data from faker aleatoreo tags slug vacio
        And I click on save
        And I wait for 5 seconds

    #Confirm tag
    Then I should see the error message "You must specify a name for the tag."
    #Create tag
