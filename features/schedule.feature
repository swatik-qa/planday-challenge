Feature: Planday Schedule Page

    Scenario: As a user, I should be able to verify the URL for Schedule page

        Given I am on the login page
        When I click the cookie consent button
        When I login with "plandayqa@outlook.com" and "APItesting21"
        When I click the navigation menu item Schedule
        Then I expect to be on the "Schedule page"

    Scenario: As a user, I should be able to count the number of displayed employees
        Given I am on the login page
        When I click the cookie consent button
        When I login with "plandayqa@outlook.com" and "APItesting21"
        When I click the navigation menu item Schedule
        Then I should be able to see 3 employees


