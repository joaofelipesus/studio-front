import { interceptMuscularGroups } from "../../helpers/interceptors";
import { personalDoLogin } from "../../helpers/user_actions"

describe("personal creating a new exercise", () => {
  beforeEach(() => {
    interceptMuscularGroups(cy)
    personalDoLogin(cy);
    cy.get('#nav-dropdown').click();
    cy.get('#exercise-options').click();
    cy.get('#new-exercise').click();
  })

  it("should be redirected to new exercise page", () => {
    cy.url().should('equal', 'http://localhost:4200/exercises/new')
  })

  it("render error messages returned by the API", () => {
    cy.intercept(
      {
        method: 'POST',
        url: '/api/exercises',
      },
      {
        statusCode: 400,
         body: {
          "errors": [
            "Grupo muscular é obrigatório(a)",
            "Nome não pode ficar em branco"
          ]
        }
      }
    ).as('sendExerciseForm')
    cy.get('.btn').click()
    cy.get('app-form-error-messages > div > ul > :nth-child(1)').contains("Grupo muscular é obrigatório(a)")
    cy.get('div > ul > :nth-child(2)').contains("Nome não pode ficar em branco")
  })

  it("create exercise success", () => {
    cy.intercept(
      {
        method: 'POST',
        url: '/api/exercises',
      },
      {
        statusCode: 201,
         body: {
          "exercise": {
            "id": "18a04978-435b-4ceb-b0b7-3e018587da65",
            "name": "Supino Bolado",
            "muscular_group_id": "da0663f2-8912-46cc-883d-7949c3ae1d8b",
            "muscular_group": {
              "name": "Dorsais"
            }
          }
        }
      }
    ).as('sendExerciseForm')

    cy.intercept(
      {
        method: 'GET',
        url: '/api/exercises/18a04978-435b-4ceb-b0b7-3e018587da65',
      },
      {
        statusCode: 200,
         body: {
          "exercise": {
            "id": "18a04978-435b-4ceb-b0b7-3e018587da65",
            "name": "Supino Bolado",
            "muscular_group_id": "da0663f2-8912-46cc-883d-7949c3ae1d8b",
            "muscular_group": {
              "name": "Dorsais"
            }
          }
        }
      }
    ).as('sendExerciseForm')

    cy.get('#name').type('Supino Bolado');
    cy.get('#muscular_group_id').select('Bíceps');
    cy.get('.btn').click()
    cy.url().should('equal', 'http://localhost:4200/exercises/18a04978-435b-4ceb-b0b7-3e018587da65');
  })
})
