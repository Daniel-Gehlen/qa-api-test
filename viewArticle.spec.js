describe('Web - Visualização de Artigo Individual', () => {
  it('Deve visualizar um artigo individualmente', () => {
    cy.visit('/article/slug-do-artigo');
    cy.contains('h1', 'Título do Artigo'); // Substitua "Título do Artigo" pelo título real do artigo
  });
});
