import 'cypress-xpath';

describe('Footer Navigation Tests', () => {
    it('Home is active', () => {
        cy.visit('/');
        cy.xpath('(//a[@href="/" and normalize-space(text())="HOME"])[1]').should('have.class', 'text-white');
    });
    it('Users is active', () => {
        cy.visit('/users');
        cy.xpath('(//a[@href="/users" and normalize-space(text())="USERS"])[1]').should('have.class', 'text-white');
    });
    it('About is active', () => {
        cy.visit('/about');
        cy.xpath('(//a[@href="/about" and normalize-space(text())="ABOUT"])[1]').should('have.class', 'text-white');
    });
});