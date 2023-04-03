describe('user should be able to see details for a specific movie', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'movies.json' });
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', { fixture: 'single-movie-436270.json' });
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270/videos', { fixture: 'single-movie-videos-436270.json' });
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/505642', { fixture: 'single-movie-505642.json' });
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/505642/videos', { fixture: 'single-movie-videos-505642.json' });
    
    cy.visit('http://localhost:3000');
  });

  it('should be able to click a movie and see that specific movie\'s details', () => {
  
    cy.get('.poster-img').eq(2).click()
    cy.get('.hero')
    cy.contains('Black Panther: Wakanda Forever')
    cy.contains('Forever.')
    cy.get('.stats')
      .contains('p', 'Runtime: 162 min')
  });

  it('should be able to click a different movie and see that specific movie\'s details', () => {
    cy.get('.poster-img').first().click()
    cy.get('.hero')
    cy.contains('Black Adam')
    cy.contains('The world needed a hero. It got Black Adam.')
    cy.get('.stats')
      .contains('p', 'Runtime: 125 min')
  });
})