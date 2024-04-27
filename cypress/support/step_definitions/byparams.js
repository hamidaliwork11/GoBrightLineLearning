import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'



Given("user visits the pass screen", () => {
  cy.visit("https://www.gobrightline.com/train-tickets/passes");
});
When("user clicks on the Get Started button", () => {
    cy.contains('Get Started').click();
});
  
When("user clicks on travel from dropdown", () => {
    cy.get("[name=travelFrom]").click();
});

When("user clicks on Miami from dropdown {string}", (src_city) => {
    cy.get('[role="option"]').contains(src_city).click();
});
When("user clicks on travel to from dropdown", () => {
    cy.get("[name=travelTo]").click();
});

When("user clicks on West Palm Beach {string}", (dest_city) => {
    cy.get('[role="option"]').contains(dest_city).click();
});

When("user clicks on Premium button", () => {
    // cy.get('.blte-btn blte-btn--color-white blte-btn--size-medium blte-btn--width-full blte-btn--variant-primary blte-train-passes-categories__button-item','Premium').click();
    cy.fixture('ticket_data').then((ticket_data)  => {
        cy.contains(ticket_data.ticket_type).click();
    })

    

});

When("user clicks on SoFlo Solo Pass button", () => {
    // cy.get('.blte-btn blte-btn--color-blue blte-btn--size-medium blte-btn--width-normal blte-btn--variant-primary','SoFlo Solo Pass').click();
    // cy.contains('SoFlo Solo Pass').click();
    cy.get(':nth-child(1) > .blte-train-passes-options__row > .blte-train-passes-options__option-buttons > .blte-btn').click();
});

Then("user clicks on Continue button", () => {
    cy.contains('Continue').click();
});

Then("user clicks on Check-out button", () => {
    cy.contains('Check-out').click();
});

Then('the total cost should be $629.00', () => {
    // Compare the total cost with the expected cost
    // Example:
    // cy.contains('$629').should('have.value', '$629');
    // cy.get(':nth-child(4) > .blte-passes-cost-summary-item__line > .blte-passes-cost-summary-item__price').should('contain', '$629');
    cy.wait(5000);
    cy.get('[class="blte-text blte-passes-cost-summary-item__price blte-passes-cost-summary-item__price--isTotal"]').should('contain','$629.00') 
 });

 


