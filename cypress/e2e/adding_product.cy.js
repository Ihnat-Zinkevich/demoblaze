describe('adding samsung test', () => {
    it('should allow to add galaxy s6', () => {
        cy.visit('https://demoblaze.com');
            cy.get('#login2').click();
            cy.get('#loginusername').type('iscream');
            cy.get('#loginpassword').type('iscream');
            cy.contains('button', 'Log in').click();
            cy.get('#nameofuser').should('contain', 'Welcome');

            cy.get('a[href="prod.html?idp_=1"].hrefch').click();
            cy.contains('Add to cart').click();

            cy.on('window:alert', (text) => {
                expect(text).to.contains('Product added');
        });
    });
});