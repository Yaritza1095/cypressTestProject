class Blog{
    constructor(){
        this.url = "/index.php?route=extension/maza/blog/home"
        this.title = "Blog"
    }
    visit(){
        cy.visit(this.url)
    }
    getBusinessCategoryButton(){
        return cy.get('[href="https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/category&path=5"]')


    }
    getElectronicsCategoryButton(){
        return cy.get('[href="https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/category&path=6"]')


    }
    getTechnologyCategoryButton(){
        return cy.get('[href="https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/category&path=7"]')
    }
    getFashionCategoryButton(){

        return cy.get('[href="https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/category&path=1"]')

    }

    getNextPageButton(){

        return cy.get('.row > .col-sm-6 > .pagination > .page-item:nth-child(3) > .page-link')

    }
    getPreviousPageButton(){

        return cy.get('.row > .col-sm-6 > .pagination > .page-item:nth-child(2) > .page-link')

    }
}
module.exports = Blog