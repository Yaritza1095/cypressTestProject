import FakeDataGenerator from '../../support/fakeDataGenerator'

class Register{
    constructor(){
        this.url = "/index.php?route=account/register"
        this.title = "Register"
        this.fakeData = new FakeDataGenerator()
    }
    visit(){
        cy.visit(this.url)
    }
    getFirstnNameTextField(){
        const firstName = this.fakeData.getRandomFirstName()
        return cy.get('.mb-4 > #account > .form-group > .col-sm-10 > #input-firstname').type(firstName)
    }
    getLastNameTextField(){
        const lastName = this.fakeData.getRandomLastName()
        return cy.get('.mb-4 > #account > .form-group > .col-sm-10 > #input-lastname').type(lastName)
    }
    getEmailTextField(){
        const email = this.fakeData.getRandomEmail()
        return cy.get('.mb-4 > #account > .form-group > .col-sm-10 > #input-email').type(email)
    }
    getTelephoneTextField(){
        const telephone = this.fakeData.getRandomPhoneNumber()
        return cy.get('.mb-4 > #account > .form-group > .col-sm-10 > #input-telephone').type(telephone)
    }
    getPasswordTextField(text){
        return cy.get('.mb-4 > fieldset > .form-group > .col-sm-10 > #input-password').type(text)
    }
    getPasswordConfirmTextField(text){
        return  cy.get('.mb-4 > fieldset > .form-group > .col-sm-10 > #input-confirm').type(text)
    }
    getSubscribeToNewsLetterYesRadioBtn(){
        return cy.get('fieldset > .form-group > .col-sm-10 > .custom-control:nth-child(1) > .custom-control-label')
    }
    getPrivacyPolicyPopUp(){
        return cy.get('b')
    }
    getAgreeToPrivayPolicy(){
        return cy.get('.mb-4 > .buttons > .float-right > .custom-control > .custom-control-label')
    }
    getPrivacyPolicyPopUpClose(){
        return cy.get('#modal-agree > .modal-dialog > .modal-content > .modal-header > .close')
    }
    getContinueBtn(){
        return cy.get('#content > .mb-4 > .buttons > .float-right > .btn')
    }
    getUserRegistered(){
        return cy.url().should('include', '/index.php?route=account/success')
    }
    getYourAccountHasBeenCreated(){
        return cy.get('#content > h1').should('be.visible')
    }

}
module.exports = Register