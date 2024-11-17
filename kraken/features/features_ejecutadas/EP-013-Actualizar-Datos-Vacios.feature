Feature: Actualizar perfil de usuario con Datos vacios

@EP013 @user1 @web
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
    And I clean Full Name field "<CLEAN_NAME>"
    And I wait for 5 seconds
    And I click save
    And I wait for 5 seconds

  Then I can see the Name is required tag