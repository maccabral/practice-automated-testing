describe('Login Page', () => {
    it('Login', () => {
        cy.visit('https://automationexercise.com/login');
        
        cy.wait(1000);
        cy.get('[data-qa="login-email"]').type('sheklana@gmail.com', { delay: 100 });
        cy.get('[data-qa="login-password"]').type('1234', { delay: 100 });
        cy.get('[data-qa="login-button"]').click();
    })
})