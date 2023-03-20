//its API test with cy.request

describe('Basic API testing - First Part'), () => {
    it('First Api Test'), () => {
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users'
        });
    };

};

