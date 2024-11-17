Feature: Crear pagina diligenciado todos los campos correctamente

@EP006 @user1 @web
Scenario: Crear pagina diligenciado todos los campos correctamente
    And I wait for 7 seconds
  Given I navigate to page "<URLv2>"
    And I wait for 5 seconds
    And I enter email v2 "<USERNAME1v2>"
    And I wait for 2 seconds
    And I enter password v2 "<PASSWORD1v2>"
    And I wait for 2 seconds
    And I take one screenshot "./artefacts/version2/EP006/login.png"
    And I click next v2
    And I wait for 7 seconds
    And I take one screenshot "./artefacts/version2/EP006/dashboard.png"

    And I click pages
    And I wait for 4 seconds
    And I take one screenshot "./artefacts/version2/EP006/page_page.png"
    And I click New Page
    And I wait for 4 seconds
    And I take one screenshot "./artefacts/version2/EP006/new_page.png"
    And I write title v2
    And I wait for 7 seconds
    And I write the page v2
    And I wait for 7 seconds
    And I take one screenshot "./artefacts/version2/EP006/form_page.png"

  When I try to publish a page without a title v2
    And I wait for 4 seconds
    And I click publish v2
    And I wait for 4 seconds
    And I take one screenshot "./artefacts/version2/EP006/publish_page.png"
        
  Then I should see the notification article
    And I wait for 3 seconds
    And I take one screenshot "./artefacts/version2/EP006/see_page.png"
    