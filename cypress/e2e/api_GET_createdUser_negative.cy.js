describe('negative GET test suite', () => {
    //const br_token = '39b868836d47a013ccfae8f8e5c47c74ba46d9b0cc61acd95b5ce5cd610b5282'
    const userName = "unkown_user"
    beforeEach(() => {
        cy.request({
            method: 'GET',
            url: 'https://petstore.swagger.io/v2/user/${userName}',
            failOnStatusCode: false,
  
            headers: {
                'Content-Type': 'application/json',
                //'Authorization': `Bearer ${br_token}`
            }
            
        }).as('GET_createdUser')
    })
  
    it('should NOT create a new user', () => {
      cy.get('@GET_createdUser').then(response => {
        expect(response.status).to.equal(404)
        expect(response.body).to.have.all.keys('code', 'message', 'type' )
        expect(response.body).to.have.property('code', 1)
        expect(response.body).to.have.property('type', 'error')
        expect(response.body).to.have.property('message', 'User not found')
      })
    })
    
    it('should verify bad request status absense', () => {
      cy.get('@GET_createdUser').then(response => {
        expect(response.status).not.to.equal(400)
      })
    })
    
    it('should verify theres not internal server error', () => {
      cy.get('@GET_createdUser').then(response => {
        expect(response.status).not.to.equal(500)
      })
    })
    
    
  })