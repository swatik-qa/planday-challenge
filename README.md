# Planday Challenge

Note that the assessment is done using Webdriverio Cucumber (BDD framework) using Javascript as the programming language. All the actions and assertions are done as mentioned in the challenge.

## How to run tests on your local

Code is present in Github on the branch "planday-code" in the repository "planday-challenge". 
To run the tests in your local, you will have to clone the repository "planday-challenge".

1. Go to Github on the repository page, click on the "Code" button and copy the repository URL
2. Open Terminal, go to the location where you want to clone the repository and run the command:
git clone https://github.com/swatik-qa/planday-challenge.git
3. Once you have cloned the repository in your local, run git status to verify if you are on the main branch.
4. Now, checkout the branch "planday-code" using command git checkout -b "planday-code"
5. You will see all the folders and files on your local now
6. You need to run 'npm run wdio' to run all the tests on your local

## Structure & Organisation of folders and files

1. There are two feature files: one for the Login page and another for Schedule page.
2. login.feature has all the tests related to Login Page and schedule.feature has all the tests related to Schedule page.
3. Folder 'pageobjects' has three files: page.js, login.page.js, schedule.page.js
4. All the locators and methods for Login page are in login.page.js and all locators and methods for Schedule page are in schedule.page.js
5. All step definitions are under folder 'step-definitions' inside steps.js

## NOTE

1. Browser reloads after each scenario. This is because afterScenario hook is set up in wdio.conf.js file
2. While running the login test for invalid credentials, I came across captcha verification because of repeated invalid credentials. Just to note that captcha is not handled as a part of this assessment as of now
3. As a part of test wherein new shift is added for Employee 1, once a shift is added as a result of the test execution, next time same test will fail. This is because data is not getting deleted before the test runs next time. This is also not handled as a part of this assessment





