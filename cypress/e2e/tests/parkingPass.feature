Feature: Parking Pass


   Scenario Outline: To verify that user is purchasing the parking pass successfully
    Given User visits the site
    When User hovers on TICKETS & TRAVEL
    And User clicks on Parking Pass
    And User clicks on choose garage dropdown
    And User chooses from dropdown "<garage>"
    And User clicks on state from dropdown
    And User chooses state from dropdown "<state>" 
    Then User clicks on enter number plate field
    And User taking value from fixture file
    And User checks the check box
    And User clicking on Add to Cart button
    And Total cost should be "$91.00"
    And User clicks on Edit button
Examples:
|garage | state |
|Aventura | Arizona |


