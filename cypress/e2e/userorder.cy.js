describe('Order Functionality', () => {
  it('should create order using student', () => {
    cy.visit('http://localhost:5173/welcome');

     //student
     cy.get('[aria-label="Create Order"]').should('be.visible').click();
     cy.wait(6000)
     cy.get('.food-list').should('be.visible');
     cy.wait(6000)
     cy.get(':nth-child(1) > .p-card > .p-card-body > .p-card-footer > div > [aria-label="Add"]').click( {delay: 400});
     cy.get(':nth-child(2) > .p-card > .p-card-body > .p-card-footer > div > [aria-label="Add"]').click( {delay: 400});
     cy.get('.my-payment > div > .p-button').click();
     cy.get('.order-container').should('be.visible');
     cy.get('.color-base > .p-button').click();
     cy.get('.center');
  });

  it('should create order using personnel', () => {
    cy.visit('http://localhost:5173/welcome');

    //personnel
    cy.get('[aria-label="Login"]').should('be.visible').click();
    cy.get('#inputID').should('be.visible').type('220000743', {delay: 200});
    cy.get('#inputPass').should('be.visible').type('testpass', {delay: 200} );
    cy.get('.login-container > .p-button').should('be.visible').click();
    cy.wait(3000)
   
    cy.get(':nth-child(1) > .p-card > .p-card-body > .p-card-footer > div > [aria-label="Add"]').should('be.visible').click();
    //cy.get('.food-grid').should('be.visible').click();
    //cy.get('.food-grid > :nth-child(1) > .color-base').should('be.visible').click();
    cy.get(':nth-child(2) > .p-card > .p-card-body > .p-card-footer > div > [aria-label="Add"]').should('be.visible' , {delay: 400}).click( {delay: 400});
    cy.get(':nth-child(3) > .p-card > .p-card-body > .p-card-footer > div > [aria-label="Add"]').should('be.visible', {delay: 400}).click( {delay: 400});
    cy.get(':nth-child(4) > .p-card > .p-card-body > .p-card-footer > div > [aria-label="Add"]').should('be.visible', {delay: 400}).click({delay: 400});
    cy.get(':nth-child(1) > :nth-child(1) > .p-card > .p-card-body > .p-card-caption > .p-card-subtitle > div > :nth-child(2)').should('be.visible', {delay: 400}).click({delay: 400});
    //cy.get(':nth-child(2) > .d-inline-flex > :nth-child(3) > :nth-child(2)').should('be.visible').click();
    cy.get('[aria-label="Cash"] > .p-button-label').should('be.visible', {delay: 400}).click({delay: 400});
    cy.get('.container-fluid').should('be.visible', {delay: 500}).click( {delay: 400});

    cy.get('.color-base > .p-button').should('be.visible', {delay: 400}).click({delay: 400});
    //cy.get('body').should('be.visible', {delay: 400}).click({delay: 400});
    cy.get('.color-base > .p-button').should('be.visible').click();
  })
  });