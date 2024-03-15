describe('API - Obter Perfil de Usuário', () => {
  it('Deve obter o perfil de um usuário existente', () => {
    cy.request('GET', '/api/profiles/:username').then(response => {
      expect(response.status).to.eq(200);
      expect(response.body.profile).to.exist;
    });
  });
});
