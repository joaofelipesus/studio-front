import { personalDoLogin } from "../../helpers/user_actions"

describe("show exercise", () => {
  beforeEach(() => {
    personalDoLogin(cy);
  })


  it("renders error message when exercise id is invalid", () => {
    cy.intercept(
      {
        method: 'GET',
        url: '/api/exercises/ffd3c66a-2115-4d73-bf93-0d5de175974e'
      },
      { statusCode: 404 },
      {}
    ).as('getInvalidExercise')
    cy.visit("localhost:4200/exercises/ffd3c66a-2115-4d73-bf93-0d5de175974e");
    cy.get('#error-message').contains("Exercício não encontrado");
  })

  it("render exercise when it is found", () => {
    cy.intercept(
      {
        method: 'GET',
        url: '/api/exercises/ffd3c66a-2115-4d73-bf93-0d5de175974e'
      },
      {
        "exercise": {
          "id": "ffd3c66a-2115-4d73-bf93-0d5de175974e",
          "name": "Passada Halteres",
          "muscular_group_id": "1b68fbb2-29e8-421e-bdf7-d573ef14abd4",
          "muscular_group": {
            "name": "Coxas"
          }
        }
      }
    ).as('getExercise')
    cy.visit("localhost:4200/exercises/ffd3c66a-2115-4d73-bf93-0d5de175974e");
    cy.get('#name').should('have.value', 'Passada Halteres');
    cy.get('#muscular-group').should('have.value', 'Coxas');
  })
})
