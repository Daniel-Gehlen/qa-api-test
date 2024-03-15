describe('Web - Registro de Novo Usuário', () => {
  it('Deve registrar um novo usuário com sucesso', () => {
    cy.visit('/register');
    cy.get('[data-cy=username]').type('exampleUser');
    cy.get('[data-cy=email]').type('example@example.com');
    cy.get('[data-cy=password]').type('examplePassword');
    cy.get('[data-cy=register-button]').click();
    cy.url().should('include', '/login');
  });

  it('Não deve registrar um usuário com informações inválidas', () => {
    cy.visit('/register');
    cy.get('[data-cy=username]').type('');
    cy.get('[data-cy=email]').type('example@example.com');
    cy.get('[data-cy=password]').type('examplePassword');
    cy.get('[data-cy=register-button]').click();
    cy.contains('username can\'t be blank');
  });
});
