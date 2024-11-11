Feature: Actualizar perfil de usuario

@EP011 @user1 @web
Scenario: Ingresar en Ghost con datos y correcto y actualizar el perfil de usuario (Datos correctos)
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 5 seconds
    And I enter email "<USERNAME1>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD1>"
    And I wait for 2 seconds
    And I click next
    And I wait for 3 seconds
    And I click avatar
    And I wait for 7 seconds
    And I click Your Profile
    And I wait for 5 seconds
    And I clean Full Name field
    And I wait for 5 seconds
    And I enter Full Name "<FULL_NAME>"
    And I wait for 5 seconds
    And I click save
    And I wait for 20 seconds