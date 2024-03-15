describe('API - Atualização de Artigo', () => {
  it('Deve atualizar um artigo existente', () => {
    cy.login('example@example.com', 'examplePassword');

    cy.request({
      method: 'PUT',
      url: '/api/articles/:slug',
      headers: {
        Authorization: `Token ${Cypress.env('token')}`
      },
      body: {
        article: {
          title: 'Título atualizado',
          description: 'Descrição atualizada',
          body: 'Corpo atualizado',
        }
      }
    }).then(response => {
      expect(response.status).to.eq(200);
      expect(response.body.article).to.exist;
      expect(response.body.article.title).to.eq('Título atualizado');
    });
  });
});
