describe('movies should be displayed upon visiting the website', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should display 40 movie posters', () => {
      cy.get('.poster-container')
        .get('.poster').should('have.length', 40)
        .first().get('.poster-img')
        .should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg')
  });
}); 