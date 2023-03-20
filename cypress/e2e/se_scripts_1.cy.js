describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://qawerk.com/case-studies/')
  })

  it('does something', () => {
    cy.get('.filter-belgium > :nth-child(2) > .col-xs-12 > .cs-item-title > a')
    .contains('Kazidomi')
    .click()
  })

  it('does something else', () => {
    cy.get('.filter-south-korea > :nth-child(3) > .col-xs-12 > .cs-item-country')
    .contains('South Korea')

  })
  
    afterEach(() => {
      console.log('end of tests')
    })  
    
})
