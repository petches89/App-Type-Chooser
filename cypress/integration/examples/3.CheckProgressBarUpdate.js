/// <reference types="Cypress" />

describe('App Chooser Test', () => {

  it('Test 1', () => {

    cy.visit("https://betterask.erni/apptype-chooser/")

    // click start
    //cy.get(".btn").click()
    cy.ClickStart()

    for (var i = 1; i <= 11; i++) {
      cy.get('.progress-bar').invoke('attr', 'aria-valuenow').should('eq', i.toString())
      cy.ClickNext()
    }


  })
})