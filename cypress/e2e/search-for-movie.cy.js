describe("As a user, when I visit the site, I see a search bar at the top of the page. As I type into the search bar, only movies that have a title matching my search criteria are visible. I can then click on any remaining posters to view their movie details."), () => {
    beforeEach(() => {
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'movies.json' });
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', { fixture: 'single-movie-436270.json' });
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270/videos', { fixture: 'single-movie-videos-436270.json' });
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/505642', { fixture: 'single-movie-505642.json' });
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/505642/videos', { fixture: 'single-movie-videos-505642.json' });
      
      cy.visit('http://localhost:3000');
    });

}