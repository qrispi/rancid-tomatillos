describe('movies should be displayed upon visiting the website', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'movies.json' });
    cy.visit('http://localhost:3000');
  });

  it('should display 4 movie posters', () => {
      cy.get('.poster-container')
        .get('.poster-img').should('have.length', 4)
        .first().get('.poster-img')
        .should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg')
  });
}); 

describe('when the server returns an error', () => {
  it('When the server returns a 500 error, the user will see proper error handling', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { statusCode: 500 });
    cy.visit('http://localhost:3000');
    cy.contains('Sorry we are experiencing server issues right now! Please try again later!')
  });
}); 