
describe('Contact us form', () => {
    it('Contact us form', () => {
        cy.visit('https://automationexercise.com/login');
        
        cy.wait(1000);
        cy.get('[data-qa="login-email"]').type('sheklana@gmail.com', { delay: 100 });
        cy.get('[data-qa="login-password"]').type('1234', { delay: 100 });
        cy.get('[data-qa="login-button"]').click();

        cy.wait(1000);
        cy.get('a[href="/contact_us"]').click();

        cy.wait(1000);
        cy.get('[data-qa="name"]').type('Sachie Barcebal Cabral', { delay: 100 });
        
        cy.wait(1000);
        cy.get('[data-qa="email"]').type('sachie@gmail.com', { delay: 100 });

        cy.wait(1000);
        cy.get('[data-qa="subject"]').type("Tiklini", { delay: 100 });

        cy.wait(1000);
        cy.get('[data-qa="message"]').type('Hello', { delay: 100 });

        cy.wait(1000);
        cy.get('input[name="upload_file"]').attachFile('resume.pdf');

        cy.wait(1000);
        cy.get('[data-qa="submit-button"]').click();

        cy.wait(1000);
        cy.on('window:confirm', () => true);
    })
})
