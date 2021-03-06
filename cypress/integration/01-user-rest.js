// describe('User RESTful', () => {

//   it('Should return a list of users if GET /users"', () => {

//     cy.request('/users').its('body').should('deep.eq', []);

//   });

// });


describe('GET users', () => {

  it('Should answer with list of users, i.e. [{name:\'Mark\'},{name:\'Jill\'}]"', () => {
    cy.request('GET', '/users').then((response) => {
      expect(response.status).equal(200)
      expect(response.body).to.not.be.null
      expect(response.body.success).equal(true)
      expect(response.body.message).equal('successfully got users. Nice!')
      expect(response.body.users[0].name).equal('Mark')
      expect(response.body.users[1].name).equal('Jill')
    })
  })

});
