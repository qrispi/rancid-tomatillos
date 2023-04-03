describe("As a user, when I visit the site, I see a search bar at the top of the page. As I type into the search bar, only movies that have a title matching my search criteria are visible. I can then click on any remaining posters to view their movie details.", () => {
    beforeEach(() => {
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'movies.json' });
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', { fixture: 'single-movie-436270.json' });
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270/videos', { fixture: 'single-movie-videos-436270.json' });
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/505642', { fixture: 'single-movie-505642.json' });
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/505642/videos', { fixture: 'single-movie-videos-505642.json' });
      
      cy.visit('http://localhost:3000');
    });

    it('should see fewer movies as it types into the search bar', () => {
        cy.get('.poster-container')
        .get('.poster-img').should('have.length', 4);
        cy.get('.search-bar')
          .type('Black');
        cy.get('.poster-container')
          .get('.poster-img').should('have.length', 2);
        cy.get('.search-bar')
          .type(' Panther');
        cy.get('.poster-container')
          .get('.poster-img').should('have.length', 1);
    });

    it("should be able to search for a movie and see it's details after clicking on it", () => {
        cy.get('.poster-container')
          .get('.poster-img').should('have.length', 4);
        cy.get('.search-bar')
          .type('Black Adam');
        cy.get('.poster-img').first().click();
        cy.get('.hero');
        cy.contains('Black Adam');
        cy.contains('The world needed a hero. It got Black Adam.');
        cy.get('.stats')
          .contains('p', 'Runtime: 125 min');
    });
})