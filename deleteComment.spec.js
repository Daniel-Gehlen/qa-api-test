describe('API - Deletar Comentário em Artigo', () => {
  it('Deve deletar um comentário de um artigo', () => {
    cy.login('example@example.com', 'examplePassword');

    cy.request({
      method: 'DELETE',
      url: '/api/articles/:slug/comments/:id',
      headers: {
        Authorization: `Token ${Cypress.env('token')}`
      }
    }).then(response => {
      expect(response.status).to.eq(204);
    });
  });
});
