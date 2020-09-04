import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I have visited the Google home page", () => {
    cy.visit("https://www.google.co.th")
});

When('I search by a keyword {string}', keyword => {
    cy.get("input[name='q']").type(keyword).type("{enter}")
})

Then('I Should see {string} as a result', expected => {
    cy.contains(expected)
});