Feature: Planday Login Page

  Scenario: As a user, I should be able to verify the fields and button on Login page

    Given I am on the login page
    When I click the cookie consent button
    Then I see the Login form
    Then I expect to see the Username field
    Then I expect to see the Password field
    Then I expect to see the Login button