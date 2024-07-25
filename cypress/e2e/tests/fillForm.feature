Feature: Corporate Accounts

    Scenario: Verify the Sign up for corporate user account
       
        Given user visits the site 
        When user types the email into the field
        And user types the zip code into the field
        And user clicks sign up button
        And user gets "Thank you!" in Green color after button click

       