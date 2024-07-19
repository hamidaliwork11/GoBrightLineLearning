import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import { parkingPass } from "../../PageLocators/parkingPass";


Given("User visits the site", () => {
  cy.visit("https://www.gobrightline.com/");
});

When("User hovers on TICKETS & TRAVEL" , () => {

  cy.get(parkingPass.getMainDropdown).contains("TICKETS & TRAVEL").trigger('mouseover');

})

When("User clicks on Parking Pass" , () => {

  cy.get(parkingPass.getParkingpassClick).contains("Parking Passes").click();
})

When("User clicks on choose garage dropdown" , () =>{

cy.get(parkingPass.getGarageDropdown ).click({force:true});
cy.wait(7000);

})
When("User chooses from dropdown {string}",(garage) =>{

  console.log(garage);

  cy.get(parkingPass.getvalueFromDropdown).contains(garage).click({force:true});

})

When("User clicks on state from dropdown" , () => {

  cy.get(parkingPass.getstateClick).click();
  cy.wait(7000);
  

})

// When("User chooses from dropdown {string}" , (state) => {
//   // cy.log();
//   console.log(state);

//   cy.get('#\:r5\:-list').contains(state).click

// })

When("User chooses state from dropdown {string}" , (state) => {

  cy.get(parkingPass.getStatefromDropdown).contains(state).click();
})

Then ("User clicks on enter number plate field" , () => {

  cy.get(parkingPass.getPlatefieldClick).click();

})

Then('User taking value from fixture file', () => {
  cy.fixture('parking_pass').then((pass) => {

    cy.get(parkingPass.getValuefromPlatefield).type(pass.plate_no);
    
  });
});

When ("User checks the check box" , () => {

  cy.get(parkingPass.getCheckboxClick).click();
})

When("User clicking on Add to Cart button" , () => {

  cy.get (parkingPass.getAddtocartClick).contains('Add To Cart').click();

})

When ("Total cost should be {string}" , (price) => {

  cy.get (parkingPass.getTotalCost).should('contain',price);
})

When ("User clicks on Edit button" , () => {

  cy.get(parkingPass.getEditButtonClick).contains('Edit').click();
})
