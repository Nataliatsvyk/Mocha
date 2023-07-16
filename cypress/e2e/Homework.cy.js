describe('Заповнення форми', () => {
  const tests = ['text1', 'text2']
  before(() => {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
    cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
    cy.get('[title="Forms"]').click();
    cy.get('[title="Form Layouts"]').click();
  });

  tests.forEach(text1 => {
    it(`Test for text "${text1}"`, () => { 
    
    cy.get('input[placeholder="Jane Doe"]').type('Natalia Tsvyk');
    cy.get('input[placeholder="Email"]').eq(0).type('email@example.com');
    //cy.get('input.custom-checkbox').check().should('be.checked');
    cy.get('button[status="primary"]').first().click();
  });

  
  });
});

