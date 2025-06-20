describe('Signup existing account', () => {
    it('Signup existing', () => {
        cy.visit('https://automationexercise.com/login');
        
        cy.wait(1000);
        cy.get('[data-qa="signup-name"]').type('Sachie', { delay: 100 });
        cy.get('[data-qa="signup-email"]').type('sachie@gmail.com', { delay: 100 });
        cy.get('[data-qa="signup-button"]').click();
    })
})