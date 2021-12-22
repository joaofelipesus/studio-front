import { personalDoLogin } from "../../helpers/user_actions"

describe('update studentn', () => {

  beforeEach(() => {
    personalDoLogin(cy);
    cy.request('POST', 'localhost:3000/api/e2e/setup?update_student=true')
    cy.wait(200)
    cy.get('#nav-dropdown').click();
    cy.get('#student-options').click();
    cy.get('#list-student').click();
    cy.get(':nth-child(1) > :nth-child(2) > .btn').click()
    cy.get('.btn').click()
  })

  it('when data is ok', () => {
    cy.get('#name').type(' [UPDATED]')
    cy.get('.btn').click()
    cy.wait(200)
    cy.get('#name').should('have.value', '000 Student [UPDATED]')
    cy.url().should('contains', 'http://localhost:4200/students/');
  })

  it('when form has problems', () => {
    cy.get('#name').clear();
    cy.get('.btn').click();
    cy.get('.text-danger').contains('Nome não pode ficar em branco')
  })
})
