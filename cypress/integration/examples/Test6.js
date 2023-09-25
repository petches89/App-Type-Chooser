/// <reference types="Cypress" />

describe('My First Test', () => 
{

    it('Third test', () => 
    {
        
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    //Click popup when mouse hover
   // cy.get('div.mouse-hover-content').invoke('show')

   // Click popup options when hidden, not opened
    cy.contains('Top').click({force: true})
    cy.url().should('include','top')


    








  })
})