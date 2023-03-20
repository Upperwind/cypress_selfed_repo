describe('POST_negative test suite', () => {
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
                "id": "abc", //expected to have int_value
                "username": "Rio1",
                "firstName": "Netsky",
                "lastName": "thePerson",
                "email": "string@gmail.com",
                "password": "basicpass1212",
                "phone": "555666",
                "userStatus": "2" 
            }
        }).as('userCreated_negative')
    })
  
    it('should NOT create a new user', () => {
      cy.get('@userCreated_negative').then(response => {
        expect(response.status).to.equal(500)
        expect(response.body).to.have.all.keys('code', 'message', 'type')
        expect(response.body).to.have.property('code', 500)
        
      })
    })
    
    it('should verify sucessful status absense', () => {
      cy.get('@userCreated_negative').then(response => {
        expect(response.status).not.to.equal(200)
        expect(response.body).to.have.property('message', 'something bad happened')
      })
    })
    
    it('should verify bad request status', () => {
      cy.get('@userCreated_negative').then(response => {
        expect(response.status).not.to.equal(400)
      })
    })
    
    
  })