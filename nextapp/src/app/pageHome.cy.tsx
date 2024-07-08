import HomePage from './page';

describe('<HomePage />', () => {
  it('renders', () => {
    cy.mount(<HomePage />);

    cy.get('h1').should('be.visible').contains('Home');

    cy.get('a[href="/about"]').should('be.visible').contains('About');
  });
});
