class Search{
    visit(){
       cy.visit("/")
    }
    searchInput(text) {
        return cy.get('input[name="search"]').first().type(text)
      }
     
      getSearchButton() {
        return cy.get('.type-text')
      }
      getSearchCategoryDropdown() {
        return cy.get('#entry_217822 > .search-wrapper > form > #search > .search-input-group > .search-input > .dropdown > .btn')

  
        }
    getSearchCategoryAllDropdown() {
        return cy.get('#entry_217822 > .search-wrapper > form > #search > .search-input-group > .search-input > .dropdown > .dropdown-menu > .dropdown-item:nth-child(1)')

    }
    getSearCategoryDesktopDropdown() {
        return cy.get('#entry_217822 > .search-wrapper > form > #search > .search-input-group > .search-input > .dropdown > .dropdown-menu > .dropdown-item:nth-child(2)')
    }
    getSearchCategoryLaptopDropdown() {
        return cy.get('#entry_217822 > .search-wrapper > form > #search > .search-input-group > .search-input > .dropdown > .dropdown-menu > .dropdown-item:nth-child(3)')
    }
    getSearchCategoryComponentsDropDown() {
        return cy.get('#entry_217822 > .search-wrapper > form > #search > .search-input-group > .search-input > .dropdown > .dropdown-menu > .dropdown-item:nth-child(4)')
    }
    getSearchCategoryTabletsDropDown() {
        return cy.get('#entry_217822 > .search-wrapper > form > #search > .search-input-group > .search-input > .dropdown > .dropdown-menu > .dropdown-item:nth-child(5)')
    }
    getSearchCategorySoftwareDropdown() {
        return cy.get('#entry_217822 > .search-wrapper > form > #search > .search-input-group > .search-input > .dropdown > .dropdown-menu > .dropdown-item:nth-child(6)')
    }
    getSearchCategoryPhonesPDAsDropDown() {
        return cy.get('#entry_217822 > .search-wrapper > form > #search > .search-input-group > .search-input > .dropdown > .dropdown-menu > .dropdown-item:nth-child(7)')
    }   
    getSearchCategoryCameraDropDown() {

        return cy.get('#entry_217822 > .search-wrapper > form > #search > .search-input-group > .search-input > .dropdown > .dropdown-menu > .dropdown-item:nth-child(8)')
} 
    getSearchCategoryMP3PlayerDropDown() {
        return cy.get('#entry_217822 > .search-wrapper > form > #search > .search-input-group > .search-input > .dropdown > .dropdown-menu > .dropdown-item:nth-child(9)')
    }
}
module.exports = Search