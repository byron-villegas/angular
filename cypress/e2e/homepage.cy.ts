import 'cypress-xpath';

describe('homepage has Angular title', () => {
    it('should display the correct title', () => {
        cy.visit('/');
        cy.title().should('include', 'Angular');
    });
});