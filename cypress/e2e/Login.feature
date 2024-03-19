Feature:  Login Functionality 

    Scenario Outline: Verify that a user can login successfully
        Given user visits "ali" the home screen "<Source City>" "<Destination City>" "<Direction>"
        When user clicks the "my" login link
        # And user types the email address
        # And user types the password
        # Then user clicks the login button 
        # And Log out button is visible on the screen
        # And Log out button is visible on the screen
        # And Log out button is visible on the screen
     Examples:
            | Source City     | Destination City | Direction  |
            | Fort Lauderdale | Miami            | One Way    |
            | Fort Lauderdale | Miami            | Round Trip |