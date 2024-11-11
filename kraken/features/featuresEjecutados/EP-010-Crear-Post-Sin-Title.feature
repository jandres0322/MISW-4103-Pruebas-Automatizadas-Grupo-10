Feature: epcreate post

@user1 @web
Scenario: Ingreso a la aplicación y creo un post
    #Login
    Given I navigate to page "<URL>"
        And I wait for 5 seconds
        And I enter email "<USERNAME1>"
        And I wait for 2 seconds
        And I enter password "<PASSWORD1>"
        And I wait for 2 seconds
        And I click next
        And I wait for 7 seconds
    
    #Create post
    When I click on create post
        And I wait for 1 seconds
        And I click on div Begin
        And I enter text "$name_1"
        And I wait for 1 seconds
        And I click on div Begin
        And I wait for 3 seconds
        And I click on publish
        And I wait for 3 seconds
        And I click on preview
        And I wait for 3 seconds

    #Confirm post
    Then I click on publish now

