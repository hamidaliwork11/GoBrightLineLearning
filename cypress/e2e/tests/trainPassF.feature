Feature:  Login Functionality 

    Scenario: Verify that a user can login successfully
        Given user visits the pass screen
        When user clicks on the Get Started button
        And ser select values from fixture file
        And user clicks on Premium button
        And user clicks on SoFlo Solo Pass button
        Then user clicks on Continue button
        And user clicks on Check-out button
        And the total cost should be $629.00


      