import { personalDoLogin } from "../../helpers/user_actions"

describe('Create new schedule', () => {
  beforeEach(() => {
    personalDoLogin(cy)
    cy.request('POST', 'localhost:3000/api/e2e/setup?update_schedule=true')
    cy.get('#nav-dropdown').click();
    cy.get('#schedule-options').click();
    cy.get('#list-schedule').click();
    cy.get('#schedule-58a32a7a-ab63-4b9c-86f3-152b6f514b00').click()
    cy.get('.btn').click()
  })

  it('creates a new schedule and redirect when data is ok', () => {
    cy.get('#start-at').clear()
    cy.get('#start-at').type('1030')
    cy.get('#date').type('2021-11-11')
    cy.get('#workout-plan-id').select('000 Workout routine update e2e')
    cy.get('.btn').click()
    cy.url().should('contains', 'http://localhost:4200/schedules/');
    cy.get('#start-at').should('have.value', '10:30')
    cy.get('#date').should('have.value', '11/11/2021')
    cy.get('#student').should('have.value', '000 Student')
    cy.get('#workout-plan').should('have.value', '000 Workout routine update e2e')
  })

  it('render error messages', () => {
    cy.get('#start-at').clear()
    cy.get('.btn').click()
    cy.get('.text-danger').contains('Horário de início não pode ficar em branco')
  })
})
