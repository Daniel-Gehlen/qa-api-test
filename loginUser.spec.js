describe('API - Login de Usuário', () => {
  it('Deve fazer login com um usuário válido', () => {
    cy.request({
      method: 'POST',
      url: '/api/users/login',
      body: {
        user: {
          email: 'example@example.com',
          password: 'examplePassword'
        }
      }
    }).then(response => {
      expect(response.status).to.eq(200)
      expect(response.body.user).to.have.property('token')
    })
  });

  it('Não deve fazer login com credenciais inválidas', () => {
    cy.request({
      method: 'POST',
      url: '/api/users/login',
      failOnStatusCode: false,
      body: {
        user: {
          email: 'example@example.com',
          password: 'wrongPassword'
        }
      }
    }).then(response => {
      expect(response.status).to.eq(401)
      expect(response.body.errors).to.have.property('message')
    })
  });
});


describe('Web - Login de Usuário', () => {
  it('Deve fazer login com um usuário válido', () => {
    cy.visit('/login');
    cy.get('[data-cy=email]').type('example@example.com');
    cy.get('[data-cy=password]').type('examplePassword');
    cy.get('[data-cy=login-button]').click();
    cy.url().should('include', '/home');
  });

  it('Não deve fazer login com credenciais inválidas', () => {
    cy.visit('/login');
    cy.get('[data-cy=email]').type('example@example.com');
    cy.get('[data-cy=password]').type('wrongPassword');
    cy.get('[data-cy=login-button]').click();
    cy.contains('email or password is invalid');
  });
});
