import { getRandomEmail } from '../utli';
import {generateRandomZipCode} from '../utli';

import {Given , Then , When} from "cypress-cucumber-preprocessor/steps"
import { fillForm } from "../../PageLocators/FillForm";

Given("user visits the site" , () => {

    cy.visit("https://www.gobrightline.com/parking-passes")
    cy.wait(7000);
})

Then('user types the email into the field', () => {
    cy.fixture('formFill').then((form) => {
        let emailOne= getRandomEmail();
        console.log("now u see me "+emailOne);
      cy.get(fillForm.getEmail).scrollIntoView().type(emailOne);
    });
  });

Then("user types the zip code into the field" , () =>{
    cy.fixture('formFill').then((form) => {

        let zip = generateRandomZipCode();
  
        cy.get(fillForm.getzipCode).scrollIntoView().type(zip);
      });

})

Given("user clicks sign up button" , () => {

    cy.get("button").contains('Sign Up').click();
    cy.wait(7000);
})


