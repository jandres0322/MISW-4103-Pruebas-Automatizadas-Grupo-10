Feature: Crear pagina sin agregar el titulo de la página

@EP005 @user1 @web
Scenario: Crear pagina sin agregar el titulo de la página
    And I wait for 7 seconds
  Given I navigate to page "<URLv2>"
    And I wait for 5 seconds
    And I enter email v2 "<USERNAME1v2>"
    And I wait for 2 seconds
    And I enter password v2 "<PASSWORD1v2>"
    And I wait for 2 seconds
    And I take one screenshot "./artefacts/version2/EP005/login.png"
    And I click next v2
    And I wait for 7 seconds
    And I take one screenshot "./artefacts/version2/EP005/dashboard.png"

    And I click pages
    And I wait for 4 seconds
    And I take one screenshot "./artefacts/version2/EP005/page_page.png"
    And I click New Page
    And I wait for 4 seconds
    And I take one screenshot "./artefacts/version2/EP005/new_page.png"
    And I write the page v2
    And I wait for 7 seconds

  When I try to publish a page without a title v2
    And I wait for 4 seconds
    And I click publish v2
    And I wait for 4 seconds
    And I take one screenshot "./artefacts/version2/EP005/publish_page.png"
    And I click continue
    And I wait for 5 seconds
    And I take one screenshot "./artefacts/version2/EP005/continue_page.png"
    And I click right now
    And I wait for 5 seconds
    And I take one screenshot "./artefacts/version2/EP005/right_page.png"

   Then I should not see copy link button
    And I wait for 7 seconds
    And I take one screenshot "./artefacts/version2/EP005/see_page.png"
    