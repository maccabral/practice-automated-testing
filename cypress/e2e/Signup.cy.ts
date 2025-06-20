describe('Signup Page', () => {
    it('Signup', () => {
        cy.visit('https://automationexercise.com/signup');

        cy.wait(1000);
        cy.get('[data-qa="signup-name"]').type('Sachie', { delay: 100 });
        cy.get('[data-qa="signup-email"]').type('sachie@gmail.com', { delay: 100 });
        cy.get('[data-qa="signup-button"]').click();

        cy.wait(1000);
        cy.get('#id_gender2').click();
        cy.wait(1000);

        cy.wait(1000);
        cy.get('[data-qa="password"]').type('4567', { delay: 100 });

        cy.wait(1000);
        cy.get('[data-qa="days"]').select('27');
        
        cy.wait(1000);
        cy.get('[data-qa="months"]').select('August');

        cy.wait(1000);
        cy.get('[data-qa="years"]').select('2020');
        
        cy.wait(1000);
        cy.get('#newsletter').click();

        cy.wait(1000);
        cy.get('#optin').click();

        cy.wait(1000);
        cy.get('[data-qa="first_name"]').type('Sachie', { delay: 100 });
        
        cy.wait(1000);
        cy.get('[data-qa="last_name"]').type('Cabral', { delay: 100 });

        cy.wait(1000);
        cy.get('[data-qa="company"]').type('none', { delay: 100 });

        cy.wait(1000);
        cy.get('[data-qa="address"]').type('none', { delay: 100 });

        cy.wait(1000);
        cy.get('[data-qa="address2"]').type('none', { delay: 100 });

        cy.wait(1000);
        cy.get('[data-qa="country"]').select('Singapore');

        cy.wait(1000);
        cy.get('[data-qa="state"]').type('none', { delay: 100 });

        cy.wait(1000);
        cy.get('[data-qa="city"]').type('none', { delay: 100 });

        cy.wait(1000);
        cy.get('[data-qa="zipcode"]').type('123', { delay: 100 });

        cy.wait(1000);
        cy.get('[data-qa="mobile_number"]').type('123', { delay: 100 });

        cy.wait(1000);
        cy.get('[data-qa="create-account"]').click();

        cy.wait(1000);
        cy.get('[data-qa="continue-button"]').click();
    })
})