Feature: Planday Login Page

  Scenario: As a user, I should be able to verify the fields and button on Login page

    Given I am on the login page
    When I click the cookie consent button
    Then I see the Login form
    Then I expect to see the Username field
    Then I expect to see the Password field
    Then I expect to see the Login button

  Scenario: As a user, I should be able to log in to the site

    Given I am on the login page
    When I click the cookie consent button
    When I login with "plandayqa@outlook.com" and "APItesting21"
    Then I expect to be on the Homepage

  Scenario Outline: As a user, I should not be able to log in with invalid credentials

    Given I am on the login page
    When I click the cookie consent button
    When I login with invalid <username> and <password>
    Then I should see <username_message> and <password_message>

    Examples:
      | username              | password     | username_message                       | password_message                       |
      | test@outlook.com      | Test1234?    | The username or password is incorrect. | The username or password is incorrect. |
      | plandayqa@outlook.com |              | The username or password is incorrect. | The username or password is incorrect. |
      |                       | APItesting21 | The username or password is incorrect. | The username or password is incorrect. |
      |                       |              | The username or password is incorrect. | The username or password is incorrect. |
      | plandayqa@outlook.com | APITESTING21 | The username or password is incorrect. | The username or password is incorrect. |
      | test@outlook.com      | APItesting21 | The username or password is incorrect. | The username or password is incorrect. |
      | plandayqa@outlook.com | Pass123?     | The username or password is incorrect. | The username or password is incorrect. |