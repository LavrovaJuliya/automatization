Feature: The Internet website homepage

  Scenario Outline: As a user, I can open website
    Given I open the browser and load the url<homepageurl>
    Then I should see a header with text <headertext>
    And I click on submit button

    Examples: 
      | homepageurl                      | headertext              |
      | https://test.upswot.com/admin/#/ | Sign in to your account |
