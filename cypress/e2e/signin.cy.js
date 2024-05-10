const { generateUser } = require('../support/generateUser');

describe('login Test', () => {
  it('logs in the registered user', () => {
    const { username, password } = generateUser();
    cy.log('Logging in with:', username, password);
      cy.visit('https://demoblaze.com');
      cy.registration(username, password);
          cy.get('#login2').click();
          cy.wait(5000);
          cy.get('#loginusername').type(username);
          cy.get('#loginpassword').type(password);
          cy.contains('button', 'Log in').click();
      });
  });