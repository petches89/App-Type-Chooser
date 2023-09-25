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

const cypress = require("cypress")

//we assigned a name of our command ('selectProduct') in which we wil give instructions for that command to handle the logic (passed the product name so it will click on the add to cart button)
//productName - parameter that I passed to my product
//this command accepts an argument called productName. The productName whatever you pass from your test will come into this command and you will replace it with your Blackberry
Cypress.Commands.add('selectProduct', (productName) => { 
    cy.get('h4.card-title').each(($el, index, $list) => {
        if($el.text().includes(productName))
        {
          cy.get('button.btn.btn-info').eq(index).click()
        }        
    
    
      })
})


Cypress.Commands.add('ClickNext', () => {
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



// cypress.Commands.add('FillUp', ()=>
// {
//     cy.get('#name').type('Petronela')
//     cy.get('#mailAddress').type('test@gmail.com')
//     cy.get('#company').type('TestingGmbH')
//     cy.get('#phone').type('+41765356089')
// })




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