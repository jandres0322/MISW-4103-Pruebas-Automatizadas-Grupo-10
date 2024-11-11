Feature: Verificar el tiempo de carga de la página principal

@EP014 @user1 @web
Scenario: Verificar que la página principal carga en menos de 3 segundos
Given I start the startTime
    And I navigate to page "http://localhost:2368/ghost/#/signin"
    And I take the endTime
    And I wait for 2 seconds
    
Then  I should see charging time should be less than 3 seconds