describe('Assertions Test', () => {

    beforeEach(() => {
        cy.visit('https://demoqa.com/radio-button')
    });

    it('TDD assert', () => {
        cy.log('-- its a length check, son')
        cy.get('input[type=radio]').should('have.length', 3)

        cy.log('-- class checker')
        cy.get('input[type=radio]').eq(2).should('have.class', 'disabled')

        cy.log('-- Exist checks')
        cy.get('.mt-3').should('not.exist')
        //.should('have.text', "You have selected ")

        cy.log('-- text checker')
        cy.get('.custom-control-input').eq(0).click( {force: true} )
        cy.get('.mt-3')
        .should('have.text', 'You have selected Yes')
        .and('include.text', 'Yes')
        .and('not.contain', 'test value')
        
        cy.log('-- CSS CHECK?')
        cy.get('.text-success').should('have.css', 'color', 'rgb(40, 167, 69)') //'rgb(40, 167, 69)') << CSS color properly must be checked by specifying RGB values
    });

    it('BDD Assertions', () => {

        cy.log('-- its a length check & Class check, son')
        cy.get('input[type=radio]').should($inputs => {
            expect($inputs).to.have.lengthOf(3)
            expect($inputs).to.have.class('disabled')
            
        })

        cy.log('-- Text Check but with BDD and second element of an array')
        cy.get('.custom-control-input').eq(1).click( {force: true} )
        cy.get('.mt-3')
        .should($response => {
            expect($response).to.have.text('You have selected Impressive')
            expect($response).to.include.text('Impressive')
            expect($response).to.not.include.text('NO')

        })
    })
});