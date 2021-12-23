import { personalDoLogin } from "../../helpers/user_actions"

describe('Create new schedule', () => {
  beforeEach(() => {
    personalDoLogin(cy)
    cy.request('POST', 'localhost:3000/api/e2e/setup?create_schedule=true')
    cy.get('#nav-dropdown').click();
    cy.get('#schedule-options').click();
    cy.get('#new-schedule').click();
  })

  it('creates a new schedule and redirect when data is ok', () => {
    cy.get('#student-id').select('000 Student')
    cy.get('#start-at').type('1530')
    cy.get('#date').type('2021-11-11')
    cy.get('#workout-plan').select('000 Workout routine update e2e')
    cy.get('.btn').click()
    cy.url().should('contains', 'http://localhost:4200/schedules/');
    cy.get('#start-at').should('have.value', '15:30')
    cy.get('#date').should('have.value', '11/11/2021')
    cy.get('#student').should('have.value', '000 Student')
    cy.get('#workout-plan').should('have.value', '000 Workout routine update e2e')
  })

  it('render error messages', () => {
    cy.get('#student-id').select('000 Student')
    cy.get('#date').type('2021-11-11')
    cy.get('#workout-plan').select('000 Workout routine update e2e')
    cy.get('.btn').click()
    cy.get('.text-danger').contains('Horário de início não pode ficar em branco')
  })
})
