// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//



Cypress.Commands.add('ClickStart', () => {
  cy.get('.text-right > .btn').click()
})

Cypress.Commands.add('ClickNext', () => {
  cy.get('.text-right > .btn').click()
})

Cypress.Commands.add('ClickSeeResult', () => {
  cy.get('.text-right > .btn').click()
})

Cypress.Commands.add('SelectFirst', () => {
  cy.get('.form-check-label').eq(0).click()
})

Cypress.Commands.add('NthHeader', (index) => {
  return cy.get(':nth-child(' + index + ') > .card > .card-header > .row > .col-11 > h3');
})

Cypress.Commands.add('NthHeaderAssert', (index, text, percent) => {
  var header = cy.get(':nth-child(' + index + ') > .card > .card-header > .row > .col-11 > h3');
  header.should('include.text', text)
  header.children().eq(0).should('include.text', percent + '%')
})

Cypress.Commands.add('FillInPersonalInformations', () => {
  cy.get('#name').type('Petronela Adamcova')
  cy.get('#mailAddress').type('petronela.adamcova@betterask.erni')
  cy.get('#company').type('ERNI Schweiz AG')
  cy.get('#phone').type('+41765356089')
})

Cypress.Commands.add('CheckOption', (i) => {
  cy.get('label[for="' + i.toString() + '"]').click()
})

Cypress.Commands.add('VerifyCheckbox', (i) => {
  cy.get('label[for="' + i.toString() + '"]').children().eq(0).children().eq(0).should("have.attr", "data-icon", "check-square")
})

Cypress.Commands.add('VerifyCheckCircle', (i) => {
  cy.get('label[for="' + i.toString() + '"]').children().eq(0).children().eq(0).should("have.attr", "data-icon", "check-circle")
})

Cypress.Commands.add('VerifyCircle', (i) => {
  cy.get('label[for="' + i.toString() + '"]').children().eq(0).children().eq(0).should("have.attr", "data-icon", "circle")
})





//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })