describe('Food Functionality', () => {
  it('should show all Food in the menu', () => {
    cy.visit('http://localhost:5173/welcome');

    //cashier
    cy.get('[aria-label="Login"]').should('be.visible').click();
    cy.get('#inputID').should('be.visible').type('222333444', {delay: 200});
    cy.get('#inputPass').should('be.visible').type('cashierPass', {delay: 200} );
    cy.get('.login-container > .p-button').should('be.visible').click();
    cy.wait(5000)

    cy.get(':nth-child(3) > .p-menuitem-link > .p-menuitem-text').should('be.visible',{delay: 600}).click({delay: 500});
    cy.wait(5000)
    cy.get('.color-base > .p-button').should('be.visible').click();
    cy.get('body').should('be.visible').click();
    cy.get('.color-base > .p-button').should('be.visible').click();

  })
})