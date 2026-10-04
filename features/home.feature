Feature: Home page smoke test
  Scenario: User can open the application home page
    Given the user opens the application
    Then the page title should be "Example Domain"
