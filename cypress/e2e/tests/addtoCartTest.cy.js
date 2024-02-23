import { AddtoCart } from "../../Pages/AddtoCart"
const addtocart = new AddtoCart()
import testData from "../../fixtures/addtoCartData.json"

describe('addtoCart', () => {

    before(() => {
        cy.login(testData.email, testData.password)
    })

    it('addProductinCart', ()=> {
       // addtocart.openURL()
        //login code
        addtocart.enterProductinSearch(testData.pname)
        addtocart.clickSrchIcon()
        addtocart.addtoCart()
        addtocart.verifySuccessMsg().should('contain','MacBook')


    })
})