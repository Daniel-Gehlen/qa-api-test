describe('Web - Adição e Remoção de Comentários em Artigo', () => {
  it('Deve adicionar e remover comentários em um artigo', () => {
    cy.login('example@example.com', 'examplePassword');
    cy.visit('/article/slug-do-artigo');
    cy.get('[data-cy=comment-input]').type('Novo comentário');
    cy.get('[data-cy=post-comment-button]').click();
    cy.contains('Novo comentário');
    cy.get('[data-cy=delete-comment-button]').click();
    cy.contains('Comentário removido com sucesso.');
  });
});
