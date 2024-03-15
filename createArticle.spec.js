describe('API - Criação de Artigo', () => {
  it('Deve criar um novo artigo com dados válidos', () => {
    cy.login('example@example.com', 'examplePassword');

    cy.request({
      method: 'POST',
      url: '/api/articles',
      headers: {
        Authorization: `Token ${Cypress.env('token')}`
      },
      body: {
        article: {
          title: 'Novo Artigo',
          description: 'Descrição do novo artigo',
          body: 'Corpo do novo artigo',
          tagList: ['tag1', 'tag2']
        }
      }
    }).then(response => {
      expect(response.status).to.eq(200);
      expect(response.body.article).to.exist;
      expect(response.body.article.title).to.eq('Novo Artigo');
    });
  });
});
