describe('Login functionality', () => {
  it('should login with correct credentials', () => {
    cy.visit('http://localhost:5173/welcome');
    
    //student
    cy.get('[aria-label="Create Order"]').should('be.visible').click();
    cy.wait(6000)
    cy.get('.food-list').should('be.visible')
    cy.wait(6000)
    cy.get('.color-base > .p-button').click()
    cy.get('.center')

  });

  it('should login using personnel credentials', () => {
    cy.visit('http://localhost:5173/welcome');
    //personel
    cy.get('[aria-label="Login"]').should('be.visible').click()
    cy.get('#inputID').should('be.visible').type('220000743', {delay: 200});
    cy.get('#inputPass').should('be.visible').type('testpass', {delay: 200} );
    cy.get('.login-container > .p-button').click();
    cy.wait(3000)
    cy.get('.color-base > .p-button').click();
  });

  it('should login with cashier credentials', () => {
    cy.visit('http://localhost:5173/welcome');

    //Cashier
    cy.get('[aria-label="Login"]').should('be.visible').click()
    cy.get('#inputID').type('222333444', {delay:200});
    cy.get('#inputPass').type('cashierPass', {delay:200});
    cy.get('.login-container > .p-button').click();
    cy.wait(6000)
    cy.get('body').should('be.visible').click();
    cy.get('.color-base > .p-button').click()
  });

    it('should login using admin credentials', () => {
      cy.visit('http://localhost:5173/welcome');

    //admin
    cy.get('[aria-label="Login"]').should('be.visible').click();
    cy.get('#inputID').should('be.visible').type('111222333', {delay: 200});
    cy.get('#inputPass').should('be.visible').type('adminPass', {delay: 200});
    cy.get('.login-container > .p-button').should('be.visible',).click();
    cy.wait(6000)
    cy.get('body').should('be.visible').click();
    cy.get('.color-base > .p-button').should('be.visible').click();
    cy.wait(6000)
    });

    it('should  login using counter credentials', () => {
      cy.visit('http://localhost:5173/welcome');
    
    //counter
    cy.get('[aria-label="Login"]').should('be.visible').click();
    cy.get('#inputID').should('be.visible').type('12345678', {delay: 200});
    cy.get('#inputPass').should('be.visible').type('counterPass', {delay: 200});
    cy.get('.login-container > .p-button').should('be.visible',).click();
    cy.wait(6000)
    cy.get('body').should('be.visible').click();
    cy.get('.color-base > .p-button').should('be.visible').click();
    cy.wait(6000)
    });

 it('should not login with incorrect credentials', () => {
  cy.visit('http://localhost:5173/');
  

  // Wait for elements to be visible and interactable
  cy.get('[aria-label="Login"]').should('be.visible').click();
  cy.get('#inputID').should('be.visible').type('sbduksidusaj', {delay: 200});
  cy.get('#inputPass').should('be.visible').type('hasyvjbjm', {delay: 200});
  cy.get('.login-container > .p-button').should('be.visible').click();
  cy.get('#errorMessage');

 });
});
