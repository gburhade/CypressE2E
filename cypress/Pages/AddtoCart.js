export class AddtoCart{


    weblocators = {

        searchTextFld:'[name="search"]',
        searchIcon:'span[class="input-group-btn"] [type="button"]',
        product:'.fa.fa-shopping-cart',
        successMsg:'.alert.alert-success.alert-dismissible'
    }

    //openURL()
   //{
    //cy.visit(Cypress.env('URL'))
   //}

    enterProductinSearch(pname)
    {
       cy.get(this.weblocators.searchTextFld).type(pname)
    }

    clickSrchIcon()
    {
        cy.get(this.weblocators.searchIcon).click()
    }

    addtoCart()
    {
        cy.wait(2000);
        cy.get(this.weblocators.product).eq(3).click()
    }

    verifySuccessMsg()
    {
        return cy.get(this.weblocators.successMsg)
    }

}