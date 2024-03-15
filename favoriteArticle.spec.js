describe('API - Curtir/Descurtir Artigo', () => {
  it('Deve curtir ou descurtir um artigo', () => {
    cy.login('example@example.com', 'examplePassword');

    cy.request('POST', '/api/articles/:slug/favorite', {
      headers: {
        Authorization: `Token ${Cypress.env('token')}`
      }
    }).then(response => {
      expect(response.status).to.eq(200);
      expect(response.body.article).to.exist;
      expect(response.body.article.favorited).to.eq(true);
    });

    cy.request('DELETE', '/api/articles/:slug/favorite', {
      headers: {
        Authorization: `Token ${Cypress.env('token')}`
      }
    }).then(response => {
      expect(response.status).to.eq(200);
      expect(response.body.article).to.exist;
      expect(response.body.article.favorited).to.eq(false);
    });
  });
});
