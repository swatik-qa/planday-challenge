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

    Scenario: As a user, I should be able to create a shift for Employee 1
        Given I am on the login page
        When I click the cookie consent button
        When I login with "plandayqa@outlook.com" and "APItesting21"
        When I click the navigation menu item Schedule
        When I click on the grid cell
        Then I expect to see the dialog box open
        When I create shift with from time "09:00" and to time "17:00"
        When I click on Create button
        Then I should be able to see the created shift on the schedule grid
