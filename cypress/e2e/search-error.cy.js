describe("As a user, if I search for a movie that doesn't exist, I will see a message alerting me to that and suggesting to search for something else.", () => {
    beforeEach(() => {
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'movies.json' });
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', { fixture: 'single-movie-436270.json' });
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270/videos', { fixture: 'single-movie-videos-436270.json' });
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/505642', { fixture: 'single-movie-505642.json' });
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/505642/videos', { fixture: 'single-movie-videos-505642.json' });
      
      cy.visit('http://localhost:3000');
    });

    it('should display an error', () => {
        cy.get('.search-bar')
        .type('Office Space');
        cy.get('.no-search-msg')
        .contains("We don't have any movies that match that title. Please search a different title!");
    });
});