describe('PUT test suite', () => {
    //const br_token = '39b868836d47a013ccfae8f8e5c47c74ba46d9b0cc61acd95b5ce5cd610b5282'
    const userName = "unit1"
    beforeEach(() => {
        cy.request({
            method: 'PUT',
            url: `${Cypress.env('baseUrl')}/${Cypress.env('BASE_PATH')}/unit1`,
            failOnStatusCode: false,
  
            headers: {
                'Content-Type': 'application/json',
                //'Authorization': `Bearer ${br_token}`
            },
            body: {
                "id": 15,
                "username": "virtualriot",
                "firstName": "Brooks",
                "lastName": "Shape",
                "email": "stringers@gmail.com",
                "password": "basicpass1819",
                "phone": "123451",
                "userStatus": 7
            }
            
        }).as('UPD_createdUser')
    })
  
    it('should UPDATE a new user', () => {
      cy.get('@UPD_createdUser').then(response => {
        expect(response.status).to.equal(200)
        expect(response.body).to.deep.eq({
          "code": 200,
          "type": "unknown",
          "message": '15' 
        })
        //expect(response.body).to.have.property('userStatus', 7, 'userName', "Basic")
      })
    })
    
    it('should verify bad request status absense', () => {
      cy.get('@UPD_createdUser').then(response => {
        expect(response.status).not.to.equal(400)
      })
    })
    
    
  })