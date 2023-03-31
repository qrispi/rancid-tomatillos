describe('user should be able to go back home after viewing a single movie', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'movies.json' });
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/505642', { fixture: 'single-movie-505642.json' });
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/505642/videos', { fixture: 'single-movie-videos-505642.json' });
    cy.visit('http://localhost:3000')

  });

  it('should be able to go back to home page', () => {
    cy.get('.poster').last().click()
    cy.contains('Go Back').click()
      .get('.poster-container')
      .get('.poster').should('have.length', 4)
      .first().get('.poster-img')
      .should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg')
  });  
});