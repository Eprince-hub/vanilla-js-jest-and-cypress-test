/// <reference types="cypress" />

describe('HTML element tests', () => {
  it('visit the html home page', () => {
    cy.visit('./index.html');
    cy.get('h1').contains(/^Hello World$/);
  });
});
