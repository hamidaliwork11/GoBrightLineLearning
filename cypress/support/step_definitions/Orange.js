import { When,Then,Given } from "cypress-cucumber-preprocessor/steps";
import { SignUp } from "../../PageLocators/OHRMlogin";
import{ generateRandomUsername } from '../utli'
import{ getRandomEmail } from '../utli'
import { generateRandomCompanyName} from '../utli'
import '../Hooks/hooks'
import '../Hooks/orange'

// // Given("user visits the site of orange HRM" , () => {

// //     cy.visit("https://www.orangehrm.com/en/book-a-free-demo/");
// // })

// Given("user clicks to type the full name" , ()=>{

//     cy.fixture("OHRMLogin").then((login) => {

//         let name= generateRandomUsername(); 

//         cy.get(SignUp.getFullName).scrollIntoView().type(name);

//     })
// })

// When ("user clicks to type the email" , () => {

//     // cy.fixture("OHRMLogin").then((email)  => {

//     //     let emailOne = getRandomEmail();

//     //     cy.get(SignUp.getEmail).type(emailOne);

//     // })

//     cy.randomEmail().then((email) => {
//         cy.log('Generated email: ' + email);
//         // You can use the generated email for further actions, e.g., filling a form
//         cy.get(SignUp.getEmail).type(email);
//     });
// })

// When("user clicks to give compaany name" , () => {

//     cy.fixture("OHRMLogin").then((company) => {

//         let companyName = generateRandomCompanyName ();

//         cy.get(SignUp.getCompany).type(companyName);
//     })
// })

// When("user chooses country from dropdown" , () => {


//     cy.fixture("OHRMLogin").then((country) => {


//         cy.get(SignUp.getCountry).select(country.country);
//     })

// })

// Then("user provides the phoneNumber" , () => {


//     cy.fixture("OHRMLogin").then((phone) => {
//         cy.get(SignUp.getPhoneNumber).type(phone.Phone_num);
//     })

// })

// When("user clicks on capta" , () => {

//         cy.get(SignUp.clickCapta).click();

// })

// Given('I visit the page', () => {
//     cy.visit("https://www.orangehrm.com/en/book-a-free-demo/");
//   });
  
  Given('I type the name', () => {
    cy.get(SignUp.getFullName).type(nameOne);
  });
  
//   Then('the email field should contain the random email', () => {
//     cy.get('#email').should('have.value', randomEmail);
//   });