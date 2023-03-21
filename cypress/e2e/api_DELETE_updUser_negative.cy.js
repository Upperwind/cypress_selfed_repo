describe('DELETE_negative test suite', () => {
    //const br_token = '39b868836d47a013ccfae8f8e5c47c74ba46d9b0cc61acd95b5ce5cd610b5282'
    //const userName = "myName"
    beforeEach(() => {
        cy.request({
            method: 'DELETE',
            url: `${Cypress.env('baseUrl')}/${Cypress.env('BASE_PATH')}/unkown_user`,
            failOnStatusCode: false,
  
            headers: {
                'Content-Type': 'application/json',
                //'Authorization': `Bearer ${br_token}`
            }
            
        }).as('delete_createdUser')
    })
  
    it('should NOT delete created user', () => {
      cy.get('@delete_createdUser').then(response => {
        expect(response.status).to.equal(404)
        expect(response).to.have.property('statusText', "Not Found")
        expect(response.body).not.to.deep.eq({
          "code": 200,
          "type": "unknown",
          "message": 'virtualriot' 
        })
      })
    })
    
    it('should verify bad request status absense', () => {
      cy.get('@delete_createdUser').then(response => {
        expect(response.status).not.to.equal(400)
      })
    })
  
    
    
  })