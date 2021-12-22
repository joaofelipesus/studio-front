import {ExerciseFactory} from './exercise_factory'

describe('ExerciseFactory#build', () => {
  it('should build a exercise object', () => {
    const params = {
      "exercise": {
        "id": "d1ff24ee-8edc-4a4e-950b-e2be31011329",
        "name": "4 Apoios Joelho Estendido",
        "muscular_group_id": "c10f1269-b216-42ce-88ed-a4c2e878340c",
        "muscular_group": {
          "name": "Glúteos"
        }
      }
    }
    const result = ExerciseFactory.build(params);
    expect(result.id).toMatch('d1ff24ee-8edc-4a4e-950b-e2be31011329')
    expect(result.name).toMatch('4 Apoios Joelho Estendido')
    expect(result.muscularGroupId).toMatch('c10f1269-b216-42ce-88ed-a4c2e878340c')
    expect(result.muscularGroup.id).toMatch('c10f1269-b216-42ce-88ed-a4c2e878340c')
  })
})
