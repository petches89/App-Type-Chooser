/// <reference types="Cypress" />

import HomePage from "./PageObjects/HomePage"
import ProductPage from "./PageObjects/ProductPage"

describe('My First Test', () => 
{
  before(function() {
   

    cy.fixture('example').then(function(data)
    {
this.data=data

    })
  })


    it('My FirstTest case', function() 
    {
      const homePage=new HomePage()
      const productPage=new ProductPage()
      cy.visit(Cypress.env('url')+'/angularpractice/')
      
      homePage.getEditBox().type(this.data.name)
      homePage.getGender().select(this.data.gender)
      homePage.getTwoWayDataBinding().should('have.value',this.data.name)
      homePage.getEditBox().should('have.attr','minlength','2')
      homePage.getEntrepreneur().should('be.disabled')
      homePage.getShopTab().click()   
      Cypress.config('defaultCommandTimeout',8000)
     
      this.data.productName.forEach(element => {
        cy.selectProduct(element)
        
      })

      productPage.checkOutButton().click()
      var sum=0

      //so let's remove all hardcoded locators (all above). Homepage object has ability to pull all our methods

      //so here we get all the sums of the devices. So everytime it pulls some value ($el) from each and every index we will try to get that text print in the logs
      //then we need to remove the unnecessary signs by using split method (based on the white space). We take it into new variable (if I want to reuse and modify again then var, not const)
      //so it will have 2 strings (res[0]=₹., res[1]=50000), let's trim it so it will not have any white spaces
      //now we want to sum it up-> by creating variable sum=0 and when we already have the res results add it up to the function, so it will iterate and will be adding the sums
      //but it is not working, because our variable as a string (sto it si sum+string). So how to convert a string to a number in javascript? you wrap that string in number method
      //because cypress is asynchronous, it will print 0 before running the function. So we need to wait until the looping is finished -> so we need to resolve promise by .then
      //so only after resolving the promise, move to the next step and prin it in the logs
      cy.get('tr td:nth-child(4) strong').each(($el, index, list) => 
      {
        //cy.log($el.text())
        const amount=$el.text()
        var res=amount.split(" ")
        res=res[1].trim()
        sum=Number(sum)+Number(res)

      }).then(function()
      {
        cy.log(sum)
      })

      //so let's compare it the values matches.First resolve the promise-> element.text will get stored in the amount,then you are splitting it and trimming so you get actual result
      //we use assertion-> expect().to.equal(), but don't forget to convert total to number
      cy.get('h3 strong').then(function(element)
{
  const amount=element.text()
  var res=amount.split(" ")
  var total=res[1].trim()
  expect(Number(total)).to.equal(sum)

})

      //click on the checkout button
      cy.contains('Checkout').click()
      //here is autosuggestive dropdown
      cy.get('#country').type('India')
      //to get a css you need to travel from parent to child or just copy the path from test runner
      cy.get('.suggestions > ul > li > a').click()
      //now click the checkbox, but because the element is covered by another element we need to force it as suggested
      cy.get('#checkbox2').click({force: true})
      cy.get('input[type="submit"]').click()
      //in test runner we got error message that there are some extra characters in our text
      //cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
      //that's why we will use then. You need to resolve the promise, catch this object into an element and then act upon this element by saying .text and take 
      //this text variable into actualText and then apply if actualText includes word "Success". For that we can use assertion in Chai true -> expect(true).to.be.true.
      cy.get('.alert').then(function(element)
      {
        const actualText=element.text()
        expect(actualText.includes("Success")).to.be.true
      
      })














  


  })
})