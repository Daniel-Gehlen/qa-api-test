describe('API - Atualizar Perfil de Usuário', () => {
  it('Deve atualizar informações do perfil de um usuário', () => {
    cy.login('example@example.com', 'examplePassword');

    cy.request({
      method: 'PUT',
      url: '/api/user',
      headers: {
        Authorization: `Token ${Cypress.env('token')}`
      },
      body: {
        user: {
          bio: 'Nova biografia do usuário',
          image: 'https://nova-imagem.com'
        }
      }
    }).then(response => {
      expect(response.status).to.eq(200);
      expect(response.body.user).to.exist;
      expect(response.body.user.bio).to.eq('Nova biografia do usuário');
    });
  });
});
