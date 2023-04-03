describe("As a user, if I search for a movie that doesn't exist, I will see a message alerting me to that and suggesting to search for something else.", () => {
    beforeEach(() => {
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'movies.json' });
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', { statusCode: 500 });
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270/videos', { statusCode: 500 });
      
      cy.visit('http://localhost:3000');
    });

    it('should display an error', () => {
        cy.get('.poster-img').first().click();
        cy.get('.poster-error')
        .contains("Sorry, we can't find any details for this movie right now!");
    });
});