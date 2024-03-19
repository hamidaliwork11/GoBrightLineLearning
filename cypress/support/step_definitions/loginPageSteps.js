import { loginLocators } from "../../pageLocators/loginPageLocators";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("user visits {string} the home screen {string} {string} {string}", (oneone,first,second,third) => {
  cy.visit("https://www.gobrightline.com");
  cy.get('[aria-label="TICKETS & TRAVEL"]').trigger('mouseover')
  cy.get('[href="https://www.gobrightline.com/train-tickets/passes"]').eq(0).click()

  cy.get('[class="blte-btn blte-btn--color-yellow blte-btn--size-medium blte-btn--width-normal blte-btn--variant-primary"]').eq(0).click()
  cy.get('[name="travelFrom"]').click()
  cy.get('[class="blte-desktop-select__listItems"]').contains('Boca Raton').click()
  cy.get('[name="travelTo"]').click()
  cy.get('li[id*=":r2:-list-option-"]').contains('Orlando').click()
  cy.get('[class="blte-btn blte-btn--color-white blte-btn--size-medium blte-btn--width-full blte-btn--variant-primary blte-train-passes-categories__button-item"]').eq(0).click()
  cy.get('[class="blte-train-passes-options__option-buttons"]').eq(0).click()
  cy.get('[class="blte-train-passes-footer__continueButton"]').click()
  cy.get('[class="blte-train-passes-footer__continueButton"]').click()
  cy.wait(5000)
  cy.get('[class="blte-text blte-passes-cost-summary-item__price blte-passes-cost-summary-item__price--isTotal"]').should('contain','$629.00')
  cy.wait(50000)
});

When("user clicks the login link", () => {
  cy.get(loginLocators.getLoginLink).click();
});

When("user types the email address", () => {
  cy.origin("https://prod-gobrightline.us.auth0.com", () => {
    cy.fixture("loginData").then((loginData) => {
      cy.get('[id="username"]').type(loginData.email);
    });
  });
});

When("user types the password", () => {
  cy.origin("https://prod-gobrightline.us.auth0.com", () => {
    cy.fixture("loginData").then((loginData) => {
      cy.get('[id="password"]').type(loginData.password);
    });
  });
});

Then("user clicks the login button", () => {
  cy.origin("https://prod-gobrightline.us.auth0.com", () => {
    cy.get('[type="submit"]').click();
  });

});

Then("Log out button is visible on the screen", () => {
  cy.wait(5000)
  cy.contains('Log Out').should('be.visible')
});  