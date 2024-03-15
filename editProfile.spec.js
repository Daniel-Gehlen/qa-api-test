describe('Web - Edição de Perfil de Usuário', () => {
  it('Deve editar informações do perfil de usuário', () => {
    cy.login('example@example.com', 'examplePassword');
    cy.visit('/settings');
    cy.get('[data-cy=bio]').clear().type('Nova biografia');
    cy.get('[data-cy=submit-button]').click();
    cy.contains('Novas informações de perfil salvas com sucesso.');
  });
});
