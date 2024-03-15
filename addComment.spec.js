describe('API - Adicionar Comentário em Artigo', () => {
  it('Deve adicionar um comentário a um artigo', () => {
    cy.login('example@example.com', 'examplePassword');

    cy.request({
      method: 'POST',
      url: '/api/articles/:slug/comments',
      headers: {
        Authorization: `Token ${Cypress.env('token')}`
      },
      body: {
        comment: {
          body: 'Novo comentário no artigo'
        }
      }
    }).then(response => {
      expect(response.status).to.eq(200);
      expect(response.body.comment).to.exist;
      expect(response.body.comment.body).to.eq('Novo comentário no artigo');
    });
  });
});
