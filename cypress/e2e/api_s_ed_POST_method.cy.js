//const { it } = require("mocha")

describe('POST test suite', () => {
  //const br_token = '39b868836d47a013ccfae8f8e5c47c74ba46d9b0cc61acd95b5ce5cd610b5282'
  beforeEach(() => {
      cy.request({
          method: 'POST',
          url: 'https://petstore.swagger.io/v2/store/order',
          failOnStatusCode: false,

          headers: {
              'Content-Type': 'application/json',
              //'Authorization': `Bearer ${br_token}`
          },
          body: {
            "id": 18235,
            "petId": 18,
            "quantity": 4,   
            "shipDate": "2023-03-17T13:58:17.407Z",
            "status": "open",
            "complete": true
          }
      }).as('petCreated')
  })

  it('should create a new user', () => {
    cy.get('@petCreated').then(response => {
      expect(response.status).to.equal(200)
      expect(response.body).to.have.all.keys('complete', 'id', 'petId', 'quantity', 'shipDate', 'status')
      expect(response.body).to.have.property('complete', true)
    })
  })
  
  it('should verify bad request status absense', () => {
    cy.get('@petCreated').then(response => {
      expect(response.status).not.to.equal(400)
    })
  })
  
  it('should verify theres not internal server error', () => {
    cy.get('@petCreated').then(response => {
      expect(response.status).not.to.equal(502)
    })
  })
  
  
})


/* describe('POST test suite', () => {
  const br_token = '39b868836d47a013ccfae8f8e5c47c74ba46d9b0cc61acd95b5ce5cd610b5282'
  beforeEach(() => {
      cy.request({
          method: 'POST',
          url: 'https://gorest.co.in/public/v2/users',
          failOnStatusCode: false,

          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${br_token}`
          },
          body: {
              name: 'my_user_2',
              email: 'selfmade1@randomie.com',
              gender: "male",
              status: "active"

          }
      }).as('userCreated')
  })

  it('should create a new user', () => {
      cy.get('@userCreated').then(response => {
          expect(response.status).to.equal(201)
          expect(response.body).to.have.property('name', 'email', 'status', 'gender')
      })
  })
}) */

/*
describe('My test suite', () => {
  beforeEach(() => {
    cy.request({
      method: 'POST',
      url: 'https://my-api.com/create-user',
      body: {
        name: 'John Doe',
        email: 'johndoe@example.com'
      }
    }).as('userCreated')
  })

  it('should create a new user', () => {
    cy.get('@userCreated').then(response => {
      expect(response.status).to.equal(200)
      expect(response.body).to.have.property('id')
    })
  })
})
 */ 