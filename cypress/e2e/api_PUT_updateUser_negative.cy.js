describe('negative PUT test suite', () => {
    //const br_token = '39b868836d47a013ccfae8f8e5c47c74ba46d9b0cc61acd95b5ce5cd610b5282'
    const userName = ""
    beforeEach(() => {
        cy.request({
            method: 'PUT',
            url: `${Cypress.env('baseUrl')}/${Cypress.env('BASE_PATH')}/unkown_user`,
            failOnStatusCode: false,
  
            headers: {
                'Content-Type': 'application/json',
                //'Authorization': `Bearer ${br_token}`
            },
            body: {
                "id": 1,
                "username": "Basic",
                "firstName": "Brooks",
                "lastName": "Shape",
                "email": "stringers@gmail.com",
                "password": "basicpass1819",
                "phone": "123451",
                "userStatus": "basdf" //expected to have int_value
            }
            
        }).as('UPD_createdUser_negative')
    })
  
    it('should NOT update a new user', () => {
      cy.get('@UPD_createdUser_negative').then(response => {
        expect(response.status).to.equal(500)
        expect(response.body).to.deep.eq({
          "code": 500,
          "type": "unknown",
          "message": 'something bad happened' 
        })
        //expect(response.body).to.have.property('userStatus', 7, 'userName', "Basic")
      })
    })
    
    it('should verify bad request status absense', () => {
      cy.get('@UPD_createdUser_negative').then(response => {
        expect(response.status).not.to.equal(400)
        expect(response.body).to.have.property('message', 'something bad happened')
      })
    })
  
    
    
  })