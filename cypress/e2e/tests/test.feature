Feature: train pass functionality

    Scenario Outline: to verify that user visits the pass screen successfully

        Given user visits the pass screen
        # When user clicks on TICKETS & TRAVEL button
        When user clicks on Get Started button
        And user clicks on travel from dropdown
        And user chooses source city from dropdown "<src_city>"
        And user clicks on travel to dropdown
        And user chooses Orlando from dropdown "<dest_city>"
        And user clicks on Premium button
        And user clicks on All-Station Shared Pass
        And user clicks on Continue button
        And user clicks on Check-out button
        And total price should be equal to $2299.00

    Examples: 
        |   src_city   |   dest_city    |
        |   Miami      |   Orlando      |