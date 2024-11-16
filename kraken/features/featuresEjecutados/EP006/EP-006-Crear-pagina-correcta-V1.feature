Feature: Crear pagina diligenciado todos los campos correctamente

@EP006 @user1 @web
Scenario: Crear pagina diligenciado todos los campos correctamente
  Given I navigate to page "<URL>"
    And I wait for 5 seconds
    And I enter email "<USERNAME1>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD1>"
    And I wait for 2 seconds
    And I take one screenshot "./artefacts/version1/EP006/login.png"
    And I click next
    And I wait for 4 seconds
    And I take one screenshot "./artefacts/version1/EP006/dashboard.png"
    And I click pages
    And I wait for 4 seconds
    And I take one screenshot "./artefacts/version1/EP006/page_page.png"
    And I click New Page
    And I wait for 4 seconds
    And I take one screenshot "./artefacts/version1/EP006/new_page.png"
    And I write title
    And I wait for 7 seconds
    And I write the page
    And I wait for 7 seconds
    And I take one screenshot "./artefacts/version1/EP006/form_page.png"

  When I try to publish a page without a title
    And I wait for 4 seconds
    And I take one screenshot "./artefacts/version1/EP006/publish_page.png"
    And I click continue
    And I wait for 5 seconds
    And I take one screenshot "./artefacts/version1/EP006/continue_page.png"
    And I click right now
    And I wait for 5 seconds
    And I take one screenshot "./artefacts/version1/EP006/right_page.png"

   Then I should see copy link button
    And I wait for 7 seconds
    And I take one screenshot "./artefacts/version1/EP006/see_page.png"
    