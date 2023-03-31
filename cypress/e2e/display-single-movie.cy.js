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
  
    cy.get('.poster').last().click()
    cy.get('.Hero')
      .contains('h2', 'Black Panther: Wakanda Forever')
    cy.get('.Movie-info')
      .contains('h3', 'Forever.')
    cy.get('.Stats')
      .contains('p', 'Runtime: 162 min')
  });

  it('should be able to click a different movie and see that specific movie\'s details', () => {
    cy.get('.poster').first().click()
    cy.get('.Hero')
      .contains('h2', 'Black Adam')
    cy.get('.Movie-info')
      .contains('h3', 'The world needed a hero. It got Black Adam.')
    cy.get('.Stats')
      .contains('p', 'Runtime: 125 min')
  });
})