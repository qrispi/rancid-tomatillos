describe("As a user, when I return the main page after viewing a searched movie, all Posters are displayed again and search bar is cleared of input."), () => {
    beforeEach(() => {
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'movies.json' });
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', { fixture: 'single-movie-436270.json' });
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270/videos', { fixture: 'single-movie-videos-436270.json' });
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/505642', { fixture: 'single-movie-505642.json' });
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/505642/videos', { fixture: 'single-movie-videos-505642.json' });
      
      cy.visit('http://localhost:3000');
    });

}