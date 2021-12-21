import { WorkoutPlanFactory } from './workout_plan_factory'

describe('WorkoutPlanFactory #build', () => {
  it('build a workout plan object', () => {
    const params = {
      "workout_plan": {
        "id": "dd18dae0-6dc0-49ce-bf07-6aa39e8de9e1",
        "name": "Postman",
        "personal_id": "f3020541-4847-4241-8b33-cbdec4e1b9e0"
      }
    }
    const workoutPlan = WorkoutPlanFactory.build(params);
    expect(workoutPlan.id).toMatch('dd18dae0-6dc0-49ce-bf07-6aa39e8de9e1');
    expect(workoutPlan.name).toMatch('Postman');
  })
})
