import { personalDoLogin } from "../../helpers/user_actions"

describe("personal creating a new exercise", () => {
  beforeEach(() => {
    personalDoLogin(cy)
    cy.get('#nav-dropdown').click();
    cy.get('#exercise-options').click();
    cy.get('#new-exercise').click();
  })

  it("should be redirected to new exercise page", () => {
    cy.url().should('equal', 'http://localhost:4200/exercises/new')
  })

  it("render error messages returned by the API", () => {
    cy.get('.btn').click()
    cy.get('app-form-errors > ul > :nth-child(1)').contains("Grupo muscular é obrigatório(a)")
    cy.get('app-form-errors > ul > :nth-child(2)').contains("Nome não pode ficar em branco")
  })

  it("create exercise success", () => {
    cy.server();
    cy.request('POST', 'localhost:3000/api/e2e/setup?new_exercise=true')
    cy.get('#name').type('Supino e2e');
    cy.get('#muscularGroupId').select('Bíceps');
    cy.get('.btn').click()
    cy.url().should('contains', 'http://localhost:4200/exercises/');
  })
})
