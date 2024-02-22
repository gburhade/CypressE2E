import { registerPage } from "../../Pages/RegisterPage"
const registerobj = new registerPage()
import registerData from "../../fixtures/registerData.json"


describe('Testautomation', () => {


    it('register flow', () => {
    
        registerobj.openURL()
        registerobj.enterFirstName(registerData.firstName)
        registerobj.enterLastName(registerData.lastName)
        registerobj.enterEmail(registerData.email)
        registerobj.enterTelephoneNo(registerData.telephone)
        registerobj.enterPassword(registerData.password)
        registerobj.ClickPolicyCheckbox()
        registerobj.ClickContinueBtn()


    })
})