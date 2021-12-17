function interceptExerciseListRequest(cy) {
  cy.intercept(
    {
      method: 'GET',
      url: '/api/exercises?page=1'
    },
    {
      "exercises": [
        {
          "exercise": {
            "id": "0254ddf6-650b-4443-83ee-a4a0cb3b4c66",
            "name": "4 Apoios Joelho Estendido",
            "muscular_group_id": "a123a1e0-0517-45be-8d3a-f314b4e9b5ab",
            "muscular_group": {
              "name": "Glúteos"
            }
          }
        },
        {
          "exercise": {
            "id": "c0c7ca15-4eab-4862-97e2-6e8511dd5ccf",
            "name": "4 Apoios Joelho Flexionado",
            "muscular_group_id": "a123a1e0-0517-45be-8d3a-f314b4e9b5ab",
            "muscular_group": {
              "name": "Glúteos"
            }
          }
        },
        {
          "exercise": {
            "id": "e02d9001-f728-47f7-8806-419939763dd0",
            "name": "Afundos Barra",
            "muscular_group_id": "1b68fbb2-29e8-421e-bdf7-d573ef14abd4",
            "muscular_group": {
              "name": "Coxas"
            }
          }
        },
        {
          "exercise": {
            "id": "42e7cbe1-e001-4115-9ae1-3b6519479786",
            "name": "Afundos Halteres",
            "muscular_group_id": "1b68fbb2-29e8-421e-bdf7-d573ef14abd4",
            "muscular_group": {
              "name": "Coxas"
            }
          }
        },
        {
          "exercise": {
            "id": "54088aed-490f-4f9d-b594-989b78d8d0f4",
            "name": "Afundos Smith",
            "muscular_group_id": "1b68fbb2-29e8-421e-bdf7-d573ef14abd4",
            "muscular_group": {
              "name": "Coxas"
            }
          }
        },
        {
          "exercise": {
            "id": "d9075dbd-2047-45d5-816d-a91b18193660",
            "name": "Agachamento Adutores",
            "muscular_group_id": "1b68fbb2-29e8-421e-bdf7-d573ef14abd4",
            "muscular_group": {
              "name": "Coxas"
            }
          }
        },
        {
          "exercise": {
            "id": "2b1a074d-48a3-4999-bf73-388840ee1c94",
            "name": "Agachamento Bulgaro Barra",
            "muscular_group_id": "1b68fbb2-29e8-421e-bdf7-d573ef14abd4",
            "muscular_group": {
              "name": "Coxas"
            }
          }
        },
        {
          "exercise": {
            "id": "779650a1-4b08-411d-bafd-fe8938bec775",
            "name": "Agachamento Bulgaro Halteres",
            "muscular_group_id": "1b68fbb2-29e8-421e-bdf7-d573ef14abd4",
            "muscular_group": {
              "name": "Coxas"
            }
          }
        },
        {
          "exercise": {
            "id": "b8fea07f-c17e-4307-aea8-a65134d170a9",
            "name": "Agachamento Hack",
            "muscular_group_id": "1b68fbb2-29e8-421e-bdf7-d573ef14abd4",
            "muscular_group": {
              "name": "Coxas"
            }
          }
        },
        {
          "exercise": {
            "id": "efe129b5-8813-45cc-bd86-0ddc1fd85ea7",
            "name": "Agachamento Halteres",
            "muscular_group_id": "1b68fbb2-29e8-421e-bdf7-d573ef14abd4",
            "muscular_group": {
              "name": "Coxas"
            }
          }
        }
      ],
      "total_pages": 19,
      "current_page": 1
    }
  ).as('getExercises')
}

export { interceptExerciseListRequest }
