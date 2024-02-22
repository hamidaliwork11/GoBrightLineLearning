Feature:  Login Functionality 

    Scenario: Verify that a user can login successfully
        Given user visits the home screen
        When user clicks the login link
        And user types the email address
        And user types the password
        Then user clicks the login button 
        And Log out button is visible on the screen