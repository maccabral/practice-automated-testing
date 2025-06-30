describe('Subscription', () => {
    it('Subscription', () => {
        cy.visit('https://automationexercise.com/login');
        
        cy.wait(1000);
        cy.get('[data-qa="login-email"]').type('sheklana@gmail.com', { delay: 100 });
        cy.get('[data-qa="login-password"]').type('1234', { delay: 100 });
        cy.get('[data-qa="login-button"]').click();

        cy.wait(1000);
        cy.scrollTo('bottom', { duration: 2000 });

        cy.wait(1000);
        cy.get("#susbscribe_email").type('sample@gmail.com', { delay: 100 });

        cy.wait(1000);
        cy.get('#subscribe').click();
    })
})
