/// <reference types="cypress" />

context('Navigation', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should navigate to the about page from home page', () => {
    cy.get('a[href*="about"]').click();

    cy.url().should('include', '/about');

    cy.get('h1').contains('About');
  });
});
