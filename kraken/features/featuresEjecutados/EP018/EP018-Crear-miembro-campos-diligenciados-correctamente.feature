Feature: Crear miembro con campos diligenciados correctamente

@EP018 @user1 @web
Scenario: Crear miembro con campos diligenciados correctamente
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
    And I wait for 5 seconds
    And I enter email "<USERNAME1>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD1>"
    And I wait for 2 seconds
    And I click next
    And I take one screenshot "./artefacts/version1/EP018/login.png"
    And I wait for 4 seconds
    And I click Members
    And I take one screenshot "./artefacts/version1/EP018/MembersPage.png"
    And I wait for 4 seconds
    And I click New Members
    And I wait for 4 seconds
    And I enter name member "<VALID_NAME>"
    And I wait for 3 seconds
    And I enter email member "<VALID_EMAIL>"
    And I wait for 3 seconds
    And I enter note member "<NOTE1>"
    And I wait for 3 seconds
    And I take one screenshot "./artefacts/version1/EP018/MembersFill.png"
    And I click save member
    And I wait for 3 seconds

    Then I should see the Created message with the date
     And I take one screenshot "./artefacts/version1/EP018/MembersCreated.png"
     And I wait for 4 seconds 

