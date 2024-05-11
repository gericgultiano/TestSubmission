describe('View Functionality', () => {
  it('should show order', () => {
    cy.visit('http://localhost:5173/welcome');

    cy.get('[aria-label="Login"]').should('be.visible').click();
    cy.get('#inputID').should('be.visible').type('222333444', {delay: 200});
    cy.get('#inputPass').should('be.visible').type('cashierPass', {delay: 200} );
    cy.get('.login-container > .p-button').should('be.visible').click();
    cy.wait(6000)
    cy.get('.color-base > .p-button').should('be.visible').click();
    cy.get('body').should('be.visible').click();
    cy.get('.color-base > .p-button').should('be.visible').click();
  })
})