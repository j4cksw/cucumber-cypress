import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('I have visited the Selenium official web page', function () {
    cy.visit("https://www.google.com")
});

When('There is a title on the page as SeleniumHQ Browser Automation', function () {
   cy.contains("Googla")
});

Then('I Should be able to click Search in the sidebar.', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
