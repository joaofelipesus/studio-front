import { personalDoLogin } from "../../helpers/user_actions"

describe('create new workout plan', () => {

  beforeEach(() => {
    personalDoLogin(cy);
    cy.request('POST', 'localhost:3000/api/e2e/setup?update_workout_plan=true')
    cy.get('#nav-dropdown').click();
    cy.get('#workout-plan-options').click();
    cy.get('#list-workout-plan').click();
    cy.get(':nth-child(1) > :nth-child(2) > .btn').click()
    cy.get('.btn').click()
  })

  it('when data is ok', () => {
    cy.get('#name').type(' [UPDATED]')
    cy.get('.btn').click()
    cy.wait(200)
    cy.get('#name').should('have.value', '000 Workout routine update e2e [UPDATED]')
    cy.url().should('contains', 'http://localhost:4200/workout_plans/');
  })

  it('when form has problems', () => {
    cy.get('#name').clear();
    cy.get('.btn').click();
    cy.get('.text-danger').contains('Nome não pode ficar em branco')
  })
})
