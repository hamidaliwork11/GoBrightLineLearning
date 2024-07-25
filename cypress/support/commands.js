// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



// cy.get('locator'),scrollintoVIew().type('dsfdsf')

Cypress.Commands.add('randomEmail', () => { 
    function getRandomEmail() {
        const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        const domains = ['example.com', 'test.com', 'mail.com', 'domain.com'];
        
        function getRandomString(length) {
            let result = '';
            for (let i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * characters.length));
            }
            return result;
        }
        
        const usernameLength = Math.floor(Math.random() * 10) + 5; // random length between 5 and 15
        const username = getRandomString(usernameLength);
        const domain = domains[Math.floor(Math.random() * domains.length)];
        
        return `${username}@${domain}`;
    }

    return getRandomEmail();
});
 
