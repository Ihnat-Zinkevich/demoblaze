const { newUser } = require('./generate');

describe('login Test', () => {
  it('logs in the registered user', () => {
      cy.visit('https://demoblaze.com');
      cy.registration().then(newProfile => {
        console.log('Logging in with:', newProfile.newUsername, newProfile.newPassword);
          cy.get('#login2').click();
          cy.get('#loginusername').type(newProfile.newUsername);
          cy.get('#loginpassword').type(newProfile.newPassword);
          cy.contains('button', 'Log in').click();
      });
  });
});