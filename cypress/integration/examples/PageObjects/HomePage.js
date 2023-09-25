class HomePage
{


//method -> when I call this getEditBox method this particular locator will get returned ('input[name="name"]:nth-child(2)')
//Wherever you use this edit box locator in yoru test, all your TCs sould use this method only. 
//That means that if the locator will change -> you just updade it here and it gets updated in all of your TCs
getEditBox()
     
{
    return cy.get('input[name="name"]:nth-child(2)')

}

getTwoWayDataBinding()
{
    return cy.get(':nth-child(4) > .ng-untouched')
}

getGender()
{
    return cy.get('select')
}

getEntrepreneur()
{ 
    return cy.get('#inlineRadio3')
}

getShopTab()
{
    return cy.get(':nth-child(2) > .nav-link')
}
}

//if you want to expose this class (make objects defined in this class available to all other files in framework)
export default HomePage