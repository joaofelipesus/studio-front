import { personalDoLogin } from "../../helpers/user_actions"

describe('personal create student', () => {
  beforeEach(() => {
    personalDoLogin(cy);
    cy.get('#nav-dropdown').click();
    cy.get('#student-options').click();
    cy.get('#new-student').click();
  })

  it('create student success', () => {
    cy.request('POST', 'localhost:3000/api/e2e/setup?create_student=true')
    cy.server();
    cy.get('#name').type('New student e2e')
    cy.get('#email').type('create.student@e2e.com')
    cy.get('.btn').click()
    cy.wait(200)
    cy.url().should('contains', 'http://localhost:4200/students/');
    cy.get('#name').should('have.value', 'New student e2e')
    cy.get('#email').should('have.value', 'create.student@e2e.com')
  })

  it('when missing a required field', () => {
    cy.get('#name').type('New student e2e')
    cy.get('.btn').click()
    cy.url().should('contains', 'http://localhost:4200/students/new');
    cy.get('app-form-errors > ul > :nth-child(1)').contains('User email não é válido')
    cy.get('app-form-errors > ul > :nth-child(2)').contains('User email não pode ficar em branco')
  })
})
