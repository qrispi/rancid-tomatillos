describe('user should be able to go back home after viewing a single movie', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
      .get('.poster').last().click()
  });

  it('should be able to go back to home page', () => {
    cy.get('button').click()
      .get('.poster-container')
      .get('.poster').should('have.length', 40)
      .first().get('.poster-img')
      .should('have.attr', 'src', 'https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg')
  });  
});