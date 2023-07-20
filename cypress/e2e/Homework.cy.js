describe('Заповнення форми', () => {
  const formData = [
    { name: 'Іван', email: 'ivan@example.com' },
    { name: 'Марія', email: 'maria@example.com' },
    { name: 'Петро', email: 'petro@example.com' }
  ];
  before(() => {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
    cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
    cy.get('[title="Forms"]').click();
    cy.get('[title="Form Layouts"]').click();
  });

  formData.forEach((data, index) => {
    it(`Тест ${index + 1}: Заповнення форми з ім'ям "${data.name}" і емейлом "${data.email}"`, () => {
    
    cy.get('input[placeholder="Jane Doe"]').type(data.name);
    cy.get('input[placeholder="Email"]').eq(0).type(data.email);
    //cy.get('input.custom-checkbox').check().should('be.checked');
    cy.get('button[status="primary"]').first().click();
  });
 });
});

