describe('Invalid login', () => {
    it('Invalid login', () => {
        cy.visit('https://automationexercise.com/login');
        
        cy.wait(1000);
        cy.get('[data-qa="login-email"]').type('shekla@gmail.com', { delay: 100 });
        cy.get('[data-qa="login-password"]').type('12345', { delay: 100 });
        cy.get('[data-qa="login-button"]').click();
    })
})