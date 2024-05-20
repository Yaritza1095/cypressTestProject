import Search from "../pages/Search"
 
const search = new Search()
describe("testing search functionaliy with categories: all, desktop, laptop, components, tablets, software, phones and PDAs, camera, MP3 player", () => {
    beforeEach(() => { 
        search.visit()
        //search.getSearchCategoryDropdown().click()
    })
    it("should search for a product in all categories", () => {
        search.getSearchCategoryDropdown().click()
        search.getSearchCategoryAllDropdown().click().should("contain.text", "All Categories")
        search.searchInput("phone")
        search.getSearchButton().click()
  })
  it("should search for a product in desktop category", () => {
    search.getSearchCategoryDropdown().click()
    search.getSearCategoryDesktopDropdown().click().should("contain.text", "Desktops")
    search.searchInput("pc")
    search.getSearchButton().click()
})
it("should search for a product in laptop category", () => {
    search.getSearchCategoryDropdown().click()
    search.getSearchCategoryLaptopDropdown().click().should("contain.text", "Laptops")
    search.searchInput("laptop")
    search.getSearchButton().click()
})
it("should search for a product in components category", () => {
    search.getSearchCategoryDropdown().click()
    search.getSearchCategoryComponentsDropDown().click().should("contain.text", "Components")
    search.searchInput("mouse")
    search.getSearchButton().click()
})
it("should search for a product in tablets category", () => {
    search.getSearchCategoryDropdown().click()
    search.getSearchCategoryTabletsDropDown().click().should("contain.text", "Tablets")
    search.searchInput("tablet")
    search.getSearchButton().click()
})
it("should search for a product in software category", () => {
    search.getSearchCategoryDropdown().click()
    search.getSearchCategorySoftwareDropdown().click().should("contain.text", "Software")
    search.searchInput("digital")
    search.getSearchButton().click()
})
it("should search for a product in phones and PDAs category", () => {
    search.getSearchCategoryDropdown().click()
    search.getSearchCategoryPhonesPDAsDropDown().click().should("contain.text", "Phones & PDAs")
    search.searchInput("iphone")
    search.getSearchButton().click()
})
it("should search for a product in camera category", () => {
    search.getSearchCategoryDropdown().click()
    search.getSearchCategoryCameraDropDown().click().should("contain.text", "Cameras")
    search.searchInput("camera")
    search.getSearchButton().click()
})
it("should search for a product in MP3 player category", () => {
    search.getSearchCategoryDropdown().click()
    search.getSearchCategoryMP3PlayerDropDown().click().should("contain.text", "MP3 Players")
    search.searchInput("mp3")
    search.getSearchButton().click()
})
        
})