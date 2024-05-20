import Home from "../pages/Home"
 
const home = new Home()
describe("testing home page", () => {
    beforeEach(() => { 
        home.visit()
    })
    it("should search for a product", () => {
        home.searchInput("iphone")
        home.getSearchButton().click()
  })
  it("should click special menu", () => {
    home.getSpecialButton().click()
        
})
it("should click Blog menu", () => {
    home.getBlogButton().click()
})
it("should search click Mega Menu", () => {
    home.getMegaMenuButton().click()
})
it("should click Blog menu", () => {
    home.getBlogButton().click()
})
  it("should click AddOns menu", () => {
    home.getAddOnsButton().click()
})
it("should click My account menu", () => {
    home.getBlogButton().click()
})
})
 