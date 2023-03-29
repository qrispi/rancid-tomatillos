describe('user should be able to see details for a specific movie', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should be able to click a movie and see that specific movie\'s details', () => {
    cy.get('.poster').last().click()
    cy.get('.Hero')
      .contains('h2', 'X')
    cy.get('.Movie-info')
      .contains('h3', 'Dying to show you a good')
    cy.get('.Stats')
      .contains('p', 'Runtime: 106 min')
  });
})