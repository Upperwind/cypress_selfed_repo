//its API test with cy.request

/* describe('Basic API testing - First Part', () => {
    it('First Api Test which returst body data'), () => {
        cy.request('https://gorest.co.in/public/v2/users')
        .then((response) => {
            console.log(response.body)
        });
        
        
    };

}); */


describe('API Test', () => {
  it('should return a list of users', () => {
      cy.request({
        method: 'GET',
        url: 'https://gorest.co.in/public/v2/users'
      }).then((response) => {
        console.log(response.body)
        expect(response.status).to.eq(200)
        expect(response.body).to.have.length(10)

      })
    })
  })

    it('should return a list of users', () => {
      cy.request({
        method: 'GET',
        url: 'https://gorest.co.in/public/v2/users'
      }).then((response) => {
        console.log(response.body)
        console.log(response.headers)
        expect(response.status).to.eq(200)
        expect(response.body).to.have.length(10)
        

      })
    })
