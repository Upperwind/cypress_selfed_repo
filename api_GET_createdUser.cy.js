describe('POST test suite', () => {
    //const br_token = '39b868836d47a013ccfae8f8e5c47c74ba46d9b0cc61acd95b5ce5cd610b5282'
    const userName = "myName"
    beforeEach(() => {
        cy.request({
            method: 'GET',
            url: 'https://petstore.swagger.io/v2/user/Basic',
            failOnStatusCode: false,
  
            headers: {
                'Content-Type': 'application/json',
                //'Authorization': `Bearer ${br_token}`
            }
            
        }).as('GET_createdUser')
    })
  
    it('should create a new user', () => {
      cy.get('@GET_createdUser').then(response => {
        expect(response.status).to.equal(200)
        expect(response.body).to.have.all.keys('id', 'username', 'firstName', 'lastName', 'email', 'password', 'phone', 'userStatus')
        expect(response.body).to.have.property('userStatus', 7, 'userName', "Basic")
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