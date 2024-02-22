import { loginLocators } from "../../pageLocators/loginPageLocators";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("user visits the home screen", () => {
  cy.visit("https://www.gobrightline.com");
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