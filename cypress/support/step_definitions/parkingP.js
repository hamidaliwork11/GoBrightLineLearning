import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import { trainPassLocators } from "../../PageLocators/trainPassLocators";


Given("User visits the site", () => {
  cy.visit("https://www.gobrightline.com/");
});

When("User hovers on TICKETS & TRAVEL" , () => {

  cy.get(trainPassLocators.getMenuOption).contains("TICKETS & TRAVEL").trigger('mouseover');

})

When("User clicks on Parking Pass" , () => {

  cy.get('[href="https://www.gobrightline.com/parking-passes"]').contains("Parking Passes").click();
})

When("User clicks on choose garage dropdown" , () =>{

cy.get('[role="combobox" ]>[name="ppStationName"]').click({force:true});
cy.wait(7000);

})
When("User chooses from dropdown {string}",(garage) =>{

  console.log(garage);

  cy.get('[class="Popover-body"]>[id=":r4:-list"]').contains(garage).click({force:true});

})

When("User clicks on state from dropdown" , () => {

  cy.get('[role="combobox"]>[name="ppLicenseState"]').click();
  cy.wait(7000);
  

})

// When("User chooses from dropdown {string}" , (state) => {
//   // cy.log();
//   console.log(state);

//   cy.get('#\:r5\:-list').contains(state).click

// })

When("User chooses state from dropdown {string}" , (state) => {

  cy.get('[class="blte-desktop-select__listItems"]').contains(state).click();
})

Then ("User clicks on enter number plate field" , () => {

  cy.get('[id="input-:r6:"]').click();

})

Then('User taking value from fixture file', () => {
  cy.fixture('parking_pass').then((pass) => {

    cy.get('[id="input-:r6:"]').type(pass.plate_no);
    
  });
});

When ("User checks the check box" , () => {

  cy.get('[id=":r7:"]').click();
})

When("User clicking on Add to Cart button" , () => {

  cy.get ('[class="blte-monthly-parking-passes-form__btn-wrapper"]>[type="button"]').contains('Add To Cart').click();

})

When ("Total cost should be {string}" , (price) => {

  cy.get ('[class="blte-text blte-passes-cost-summary-item__price blte-passes-cost-summary-item__price--isTotal"]').should('contain',price);
})

When ("User clicks on Edit button" , () => {

  cy.get('button[class="blte-btn blte-btn--color-blue blte-btn--size-medium blte-btn--width-normal blte-btn--variant-secondary"]').contains('Edit').click();
})
