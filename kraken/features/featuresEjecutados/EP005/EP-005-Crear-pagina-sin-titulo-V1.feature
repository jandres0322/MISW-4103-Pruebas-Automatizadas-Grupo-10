Feature: Crear pagina sin agregar el titulo de la página

@EP005 @user1 @web
Scenario: Crear pagina sin agregar el titulo de la página
  Given I navigate to page "<URL>"
    And I wait for 5 seconds
    And I enter email "<USERNAME1>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD1>"
    And I wait for 2 seconds
    And I take one screenshot "./artefacts/version1/EP005/login.png"
    And I click next
    And I wait for 4 seconds
    And I take one screenshot "./artefacts/version1/EP005/dashboard.png"
    And I click pages
    And I wait for 4 seconds
    And I take one screenshot "./artefacts/version1/EP005/page_page.png"
    And I click New Page
    And I wait for 4 seconds
    And I take one screenshot "./artefacts/version1/EP005/new_page.png"
    And I write the page
    And I wait for 7 seconds

  When I try to publish a page without a title
    And I wait for 4 seconds
    And I take one screenshot "./artefacts/version1/EP005/publish_page.png"
    And I click continue
    And I wait for 5 seconds
    And I take one screenshot "./artefacts/version1/EP005/continue_page.png"
    And I click right now
    And I wait for 5 seconds
    And I take one screenshot "./artefacts/version1/EP005/right_page.png"

   Then I should not see copy link button
    And I wait for 7 seconds
    And I take one screenshot "./artefacts/version1/EP005/see_page.png"
    