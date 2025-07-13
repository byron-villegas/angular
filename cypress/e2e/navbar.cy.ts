import 'cypress-xpath';

describe('Navbar Navigation Tests', () => {
  it('Home is active', () => {
    cy.visit('/');
    cy.xpath('//a[@href="/" and normalize-space(text())="Home"]').should('have.class', 'active');
  });

  it('Users is active', () => {
    cy.visit('/users');
    cy.xpath('//a[@href="/users" and normalize-space(text())="Users"]').should('have.class', 'active');
  });

  it('About is active', () => {
    cy.visit('/about');
    cy.xpath('//a[@href="/about" and normalize-space(text())="About"]').should('have.class', 'active');
  });
})