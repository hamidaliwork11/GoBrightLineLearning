import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'



Given("user visits the site screen", () => {
  cy.visit("https://www.gobrightline.com/train-tickets/passes");
});

When ("user clicks on Get Started button" , () => {

    cy.get ("[class= 'blte-train-passes-footer__continueButton']").click();
})

When("user clicks on travel from dropdown", () => {
    cy.get("[name=travelFrom]").click();
});


When ("user chooses source city from dropdown {string}" , (src_city) => {

    cy.get('[role="option"]').contains(src_city).click();

})

When ("user clicks on travel to dropdown" , () => {

    cy.get("[name=travelTo]").click();
})


When ("user chooses Orlando from dropdown {string}" , (dest_city) => {

    cy.get('[role="option"]').contains(dest_city).click();

})

When ("user clicks on Premium button" , () => {

    cy.get('[class="blte-btn blte-btn--color-blue blte-btn--size-medium blte-btn--width-full blte-btn--variant-primary blte-train-passes-categories__button-item"]').click();
})

When ("user clicks on All-Station Shared Pass" , () => {

    cy.get('[class="blte-train-passes-options__option-buttons"]').click();})

When("user clicks on Continue button" , () => {

    cy.get('[class="blte-train-passes-footer__continueButton"]').click();
})

When ("user clicks on Check-out button" , () => {

    cy.get('[class="blte-train-passes-footer__continueButton"]').click();
})

Then ("total price should be equal to $2299.00" , () => {

    cy.get('[class="blte-text blte-passes-cost-summary-item__price blte-passes-cost-summary-item__price--isTotal"]').should('contain','$2299.00');
})