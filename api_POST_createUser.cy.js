describe('POST test suite', () => {
    //const br_token = '39b868836d47a013ccfae8f8e5c47c74ba46d9b0cc61acd95b5ce5cd610b5282'
    beforeEach(() => {
        cy.request({
            method: 'POST',
            url: 'https://petstore.swagger.io/v2/user/',
            failOnStatusCode: false,
  
            headers: {
                'Content-Type': 'application/json',
                //'Authorization': `Bearer ${br_token}`
            },
            body: {
                "id": 15,
                "username": "unit1",
                "firstName": "Ellis",
                "lastName": "thePerson",
                "email": "string@gmail.com",
                "password": "basicpass1212",
                "phone": "555666",
                "userStatus": 5
            }
        }).as('userCreated')
    })
  
    it('should create a new user', () => {
      cy.get('@userCreated').then(response => {
        expect(response.status).to.equal(200)
        expect(response.body).to.have.all.keys('code', 'message', 'type')
        expect(response.body).to.have.property('code', 200, 'message', 15)
      })
    })
    
    it('should verify bad request status absense', () => {
      cy.get('@userCreated').then(response => {
        expect(response.status).not.to.equal(400)
      })
    })
    
    it('should verify theres not internal server error', () => {
      cy.get('@userCreated').then(response => {
        expect(response.status).not.to.equal(500)
      })
    })
    
    
  })