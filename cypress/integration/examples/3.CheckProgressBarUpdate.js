/// <reference types="Cypress" />

describe('App Chooser Test', () => {

  it('WhenClickingNext_ProgressBarUpdates', () => {

    cy.visit("/")

    cy.ClickStart()

    for (var i = 1; i <= 11; i++) {
      cy.get('.progress-bar').invoke('attr', 'aria-valuenow').should('eq', i.toString())
      cy.ClickNext()
    }
  })
})