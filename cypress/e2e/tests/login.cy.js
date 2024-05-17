import Login from "../pages/Login"
 
const login = new Login()
describe("Testing login", () => {
    before(() => { 
        login.visit()
    })
    it("should login with valid credentials", () => {
        login.getEmailTextField("yaritza@mail.com")
        login.getPasswordTextField("1234")
        login.getLoginButton().click()
       
    })
    after(() => {
        it("Should take user to login", () => {
            login.userIsLoggedIn()
            login.myAccountIsVisible()
})
})
})