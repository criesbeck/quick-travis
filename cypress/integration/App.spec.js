/* global cy */

describe ('Test App', () => {

  it ('launches with Fall term', () => {
    cy.visit ('/');
    cy.get('.courseBtn').should('contain' ,'Fall');
  });

  it('can show another term', () => {
    cy.visit ('/');
    cy.get('.termBtn').contains('Winter').click();
    cy.get('.courseBtn').should('contain' ,'Winter');
  });
});