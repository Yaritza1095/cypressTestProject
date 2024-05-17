
//TO PLAY WITH EXPERIMENTAL STUDIO
describe('template spec', () => {
  it('leetcodein', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://letcode.in/forms');
    cy.get('#firstname').type('Test');
    cy.get('#lasttname').type('test');
    cy.get('#email').type('hello@mail.com');
    cy.get(':nth-child(2) > :nth-child(2) > .field > .control > .select > select').select('1809');
    cy.get(':nth-child(3) > :nth-child(1) > .field').click();
    cy.get('#Addl1').type('Luis perez G');
    cy.get('#Addl2').type('Res La Fe');
    cy.get('#state').type('DN');
    cy.get('#postalcode').type('11111');
    cy.get(':nth-child(5) > :nth-child(2) > .field > .control > .select > select').select('Dominican Republic');
    cy.get('#Date').click();
    cy.get('#female').check();
    cy.get('.checkbox > input').check();
    cy.get('.control > .button').click();
    cy.get('.control > .button').click();
    cy.get('#Phno').type('8092223344');
    cy.get('.control > .button').click();
    /* ==== End Cypress Studio ==== */
  });
})