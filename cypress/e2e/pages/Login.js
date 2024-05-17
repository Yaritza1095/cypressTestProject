class Login{
    constructor(){
        this.url = "/index.php?route=account/login"
        this.title = "Login"
    }
    visit(){
        cy.visit(this.url)
    }
    getEmailTextField(text){
        return cy.get('.card > .card-body > form > .form-group > #input-email').type(text)
    }
    getPasswordTextField(text){
        return cy.get('.card > .card-body > form > .form-group > #input-password').type(text)
    }
    getLoginButton(){
        return cy.get('.col-lg-6 > .card > .card-body > form > .btn')
    }
    userIsLoggedIn(){
        return cy.url().should('include','index.php?route=account/account' )

    }
    myAccountIsVisible(){
        return cy.get('#content > div:nth-child(1) > h2').should('be.visible')

    }
}
module.exports = Login
