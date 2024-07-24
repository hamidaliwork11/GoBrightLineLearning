import { When,Then,Given } from "cypress-cucumber-preprocessor/steps";
import { SignUp } from "../../PageLocators/OHRMlogin";
import{ generateRandomUsername } from '../utli'
import{ getRandomEmail } from '../utli'
import { generateRandomCompanyName} from '../utli'

Given("user visits the site of orange HRM" , () => {

    cy.visit("https://www.orangehrm.com/en/book-a-free-demo/");
})

When("user clicks to type the full name" , ()=>{

    cy.fixture("OHRMLogin").then((login) => {

        let name= generateRandomUsername(); 

        cy.get(SignUp.getFullName).scrollIntoView().type(name);

    })
})

When ("user clicks to type the email" , () => {

    cy.fixture("OHRMLogin").then((email)  => {

        let emailOne = getRandomEmail();

        cy.get(SignUp.getEmail).type(emailOne);

    })
})

When("user clicks to give compaany name" , () => {

    cy.fixture("OHRMLogin").then((company) => {

        let companyName = generateRandomCompanyName ();

        cy.get(SignUp.getCompany).type(companyName);
    })
})

When("user chooses country from dropdown" , () => {


    cy.fixture("OHRMLogin").then((country) => {


        cy.get(SignUp.getCountry).select(country.country);
    })

})

Then("user provides the phoneNumber" , () => {


    cy.fixture("OHRMLogin").then((phone) => {


        cy.get(SignUp.getPhoneNumber).type(phone.Phone_num);
    })

})

When("user clicks on capta" , () => {


        cy.get(SignUp.clickCapta).click();

})

