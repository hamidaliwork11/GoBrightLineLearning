

before(() => {

    cy.log('Global Before Hook');




    cy.visit("https://www.orangehrm.com/en/book-a-free-demo/")

})

beforeEach(() => {

    cy.log("Almab")
})

after(() => {

    cy.log("Almab")
})

afterEach(() => {
    cy.log("Almab")
})