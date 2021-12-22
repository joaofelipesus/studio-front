import { personalDoLogin } from "../../helpers/user_actions"

describe('create new workout plan', () => {

  beforeEach(() => {
    personalDoLogin(cy);
    cy.get('#nav-dropdown').click();
    cy.get('#workout-plan-options').click();
    cy.get('#new-workout-plan').click();
  })

  it('create new workout plan', () => {
    cy.request('POST', 'localhost:3000/api/e2e/setup?create_workout_plan=true')
    cy.get('#name').type('Workout routine e2e')
    cy.get('.btn').click()
    cy.wait(200)
    cy.get('#name').should('have.value', 'Workout routine e2e')
    cy.url().should('contains', 'http://localhost:4200/workout_plans/');
  })

  it('render error messages when form data has problems', () => {
    cy.get('.btn').click()
    cy.get('.text-danger').contains('Nome não pode ficar em branco')
  })

})
