import Register from '../pages/Register'
const register = new Register()
const password = '1234'
describe("Testing User Sign up", () => {
    before(() => { 
        register.visit()
    })
    it("should allow the user to register", () => {
        register.getFirstnNameTextField()
        register.getLastNameTextField()
        register.getEmailTextField()
        register.getTelephoneTextField()
        register.getPasswordTextField(password)
        register.getPasswordConfirmTextField(password)
        register.getSubscribeToNewsLetterYesRadioBtn().click()
        register.getPrivacyPolicyPopUp().click()
        register.getPrivacyPolicyPopUpClose().click()
        register.getAgreeToPrivayPolicy().click()
        register.getContinueBtn().click()
})
after(() => {
    it("Should take user to login", () => {
        register.getUserRegistered()
        register.getYourAccountHasBeenCreated()
})
})
})