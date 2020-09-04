Feature: A feature to validate certains on visiting the Selenium Dev website

    Scenario: On visiting the homepage of selenium.dev

    Given I have visited the Selenium official web page
    When There is a title on the page as SeleniumHQ Browser Automation
    Then I Should be able to click Search in the sidebar.