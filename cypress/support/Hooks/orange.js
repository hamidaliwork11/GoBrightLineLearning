

let nameOne ;

before(() => {

    cy.fixture("Orange").then((nameData) => {

        nameOne = nameData.name;

    })

})


beforeEach(() => {
    // Optionally, you can re-generate random email before each test if needed
    cy.fixture('Orange').then((data) => {
      nameOne = generateRandomEmail(data);
      cy.log(`Generated random email before each test: ${nameOne}`);
    });
  });

function generateRandomEmail(data) {
    const fullName = getRandomElement(data.nameOne);
    // const lastName = getRandomElement(data.lastNames);
    // const domain = getRandomElement(data.domains);
    return `${fullName.toLowerCase()}`;
  }
  function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    
    return arr[randomIndex];
  }

