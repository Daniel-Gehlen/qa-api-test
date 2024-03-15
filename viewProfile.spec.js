describe('Web - Visualização de Perfil de Usuário', () => {
  it('Deve visualizar o perfil de um usuário', () => {
    cy.visit('/profile/username');
    cy.contains('h4', 'Nome do Usuário'); // Substitua "Nome do Usuário" pelo nome real do usuário
  });
});
