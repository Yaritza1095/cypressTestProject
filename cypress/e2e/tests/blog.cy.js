import Blog from "../pages/Blog"
 
const blog = new Blog()

describe("testing home page", () => {
    beforeEach(() => { 
        blog.visit()
    })
    it("should visit the blog page", () => {
        cy.title().should("eq", 'Blog - Poco theme' )	
    })
    it("Should contain the correct category name", () => {
        blog.getBusinessCategoryButton().should("contain.text", "Business")
        blog.getElectronicsCategoryButton().should("contain.text", "Electronics")
        blog.getTechnologyCategoryButton().should("contain.text", "Technology")
        blog.getFashionCategoryButton().should("contain.text", "Fashion")
})

})