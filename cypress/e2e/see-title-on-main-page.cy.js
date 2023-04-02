describe('App title should be shown on main page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'movies.json' });
    cy.visit('http://localhost:3000');
  });
  
  it('should have a the title of the app', () => {
    cy.get('header')
      .contains('h1', "Rancid Tomatillos")
    cy.get('header')
      .contains('p', "find your next worst movie...")
  });
});