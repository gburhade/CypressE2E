export class registerPage{

   //creating object in js
   weblocators = {

    firstName:'#input-firstname',
    lastName:'#input-lastname1',
    email:'#input-email',
    telephone:'#input-telephone',
    password:'#input-password',
    passwordConfirm:'#input-confirm',
    privactPolChkbx:'[name="agree"]',
    continueBtn:'[type="submit"]'

   }

   openURL()
   {
    cy.visit(Cypress.env('URL'))
   }

   enterFirstName(fName)
   {
     cy.get(this.weblocators.firstName).type(fName)
   }

   enterLastName(lName)
   {
     cy.get(this.weblocators.lastName).type(lName)
   }

   enterEmail(email)
   {
     cy.get(this.weblocators.email).type(email)
   }

   enterTelephoneNo(telepNo)
   {
     cy.get(this.weblocators.telephone).type(telepNo)
   }

   enterPassword(pswd)
   {
     cy.get(this.weblocators.password).type(pswd)
     cy.get(this.weblocators.passwordConfirm).type(pswd)
   }

   ClickPolicyCheckbox()
   {
    cy.get(this.weblocators.privactPolChkbx).check()
   }

   ClickContinueBtn()
   {
    cy.get(this.weblocators.continueBtn).click()
   }



   




}