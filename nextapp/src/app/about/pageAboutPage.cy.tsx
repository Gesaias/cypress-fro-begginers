import AboutPage from './page';

describe('<AboutPage />', () => {
  it('renders', () => {
    cy.mount(<AboutPage />);

    cy.get('h1').contains('About');

    cy.get('a[href="/"]').should('be.visible').contains('Home');
  });
});
