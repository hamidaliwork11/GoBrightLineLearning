import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'



Given("user visits the pass screen", () => {
  cy.visit("https://www.gobrightline.com/train-tickets/passes");
});

When("user clicks on the Get Started button", () => {
    cy.contains('Get Started').click();
});


When("user select values from fixture", () => {

    cy.fixture(ticket_d).then((data) => {
        cy.get("[name=travelFrom]").should(be.visible);
        cy.get("[name=travelFrom]").select(data.travel_from);

        cy.get("[name=travelTo]").should(be.visible);
        cy.get("[name=travelTo]").select(data.travel_from);

    })
    When("user clicks on Premium button", () => {
    // cy.get('.blte-btn blte-btn--color-white blte-btn--size-medium blte-btn--width-full blte-btn--variant-primary blte-train-passes-categories__button-item','Premium').click();
        
        
        cy.contains('Premium').click(); })

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
        

    
    })