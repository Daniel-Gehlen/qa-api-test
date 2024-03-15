describe('API - Listar Artigos', () => {
  it('Deve obter uma lista de artigos', () => {
    cy.request('GET', '/api/articles').then(response => {
      expect(response.status).to.eq(200);
      expect(response.body.articles).to.have.length.above(0);
    });
  });
});
