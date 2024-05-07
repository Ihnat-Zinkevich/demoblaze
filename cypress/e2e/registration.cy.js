const { newUser } = require('./generate');

describe('registration test', () => {
  it('should register new user', () => {
    const newProfile = newUser();
    cy.visit('https://demoblaze.com')
    cy.get('#signin2').click();
    cy.get('#sign-username').type(newProfile.newUsername);
    cy.get('#sign-password').type(newProfile.newPassword);
    cy.get('button[onclick="register()"]').click();

    //assertion
    cy.get('#nava').should('be.visible');
  })
})