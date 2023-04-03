describe("When a user clicks on a movie and the details page is rendered, the URL updates to reflect that movie’s unique ID and the user can click the browser forward & back arrows to navigate", () => {
    beforeEach(() => {
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'movies.json' });
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', { fixture: 'single-movie-436270.json' });
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270/videos', { fixture: 'single-movie-videos-436270.json' });
      
      cy.visit('http://localhost:3000');
    });

    it('should have a unique URL path when clicking on a movie and be able to go back and forward', () => {
        cy.get('.poster-img').first().click();
        cy.url('http://localhost:3000/movie/436270');
        cy.go('back')
        cy.url('http://localhost:3000/');
        cy.go('forward')
        cy.url('http://localhost:3000/movie/436270');
    });
});