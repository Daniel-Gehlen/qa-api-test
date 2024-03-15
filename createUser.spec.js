describe('API - Criação de Usuário', () => {
  it('Deve criar um novo usuário com dados válidos', () => {
    cy.request({
      method: 'POST',
      url: '/api/users',
      body: {
        user: {
          username: 'exampleUser',
          email: 'example@example.com',
          password: 'examplePassword'
        }
      }
    }).then(response => {
      expect(response.status).to.eq(200)
      expect(response.body.user).to.have.property('token')
    })
  });

  it('Não deve criar um usuário com dados inválidos', () => {
    cy.request({
      method: 'POST',
      url: '/api/users',
      failOnStatusCode: false,
      body: {
        user: {
          username: '',
          email: 'example@example.com',
          password: 'examplePassword'
        }
      }
    }).then(response => {
      expect(response.status).to.eq(422)
      expect(response.body.errors).to.have.property('username')
    })
  });
});
