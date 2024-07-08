/// <reference types="cypress" />

context('Navigation', () => {
  beforeEach(() => {
    cy.visit('/about');
  });

  it('should navigate to the home page from about page', () => {
    cy.get('a[href="/"]').click();

    cy.url().should('include', '/');

    cy.get('h1').contains('Home');
  });
});
