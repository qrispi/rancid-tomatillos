describe('App title should be shown on main page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('should have a the title of the app', () => {
    cy.get('header')
      .contains('h1', "Rancid Tomatillos")
    cy.get('header')
      .contains('h2', "find your next worst movie...")
  });
});