describe('Delete Account', () => {
    it('Delete Account', () => {
        cy.visit('https://automationexercise.com/login');
        
        cy.wait(1000);
        cy.get('[data-qa="login-email"]').type('sachie@gmail.com', { delay: 100 });
        cy.get('[data-qa="login-password"]').type('4567', { delay: 100 });
        cy.get('[data-qa="login-button"]').click();

        cy.wait(1000);
        cy.get('a[href="/delete_account"]').click();

        cy.wait(1000);
        cy.get('[data-qa="continue-button"]').click();
    })
})