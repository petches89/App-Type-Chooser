/// <reference types="Cypress" />

describe('App Chooser Test', () => {

  it('Test 1', () => {

    cy.visit("https://betterask.erni/apptype-chooser/")
    cy.ClickStart()

    for (var i = 0; i < 11; i++) {
      cy.SelectFirst()
      cy.ClickNext()
    }

    cy.ClickSeeResult()
    cy.get('input#name').siblings().eq(0).find('._error-inner').should('have.text', 'Name is required.')
    cy.get('input#mailAddress').siblings().eq(0).find('._error-inner').should('have.text', 'Valid email is required.')
    cy.get('#name').type('Petronela')
    cy.get('input#mailAddress').siblings().eq(0).find('._error-inner').should('have.text', 'Valid email is required.')
    cy.get('#mailAddress').type('test@gmail.com')
    cy.ClickSeeResult()
  })
})