//hooks are from Mocha.js

/* Order 
    1. before > Executed ONCE, as soon as first TC finished
    2. beforeEach > Executed BEFORE each TCs
    3. test EXECUTION ACTION
    4. afterEach > Executed AFTER each TC
    5. after > executed ONCE, as as the last TC is finished
*/

//skip = it.skip and only = cy.only
// skip > skips the execution of the test case in which it's used, only > RUNS cy.only test cases

describe('Demo Test Training', function (){

    before(function(){
        cy.log('its BEFORE_HOOK message shows after all TCses')
    });

    beforeEach(function(){
        cy.log('Is going to be shown BEFORE EACH_HOOK')

    });

    it('TEST CASE 1', function(){
        console.log("first test case COMPLETED")
    });

    it.skip('TEST CASE 2', function(){
        console.log("second test COMPLETION")
    });

    it.only('TEST CASE 3', function(){
        console.log("third test MESSAGE")
    });
        
    it('TEST CASE 4', function(){
        console.log("fourth test message")
    });

    afterEach(function(){
        cy.log('message is shown after_EACH_HOOK TC')

    })

    after(function(){
        cy.log('message is shown all tests AFTER_HOOK TCses')

    })
})
