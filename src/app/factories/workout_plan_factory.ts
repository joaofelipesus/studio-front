import { WorkoutPlan } from '../models/workout_plan';

export class WorkoutPlanFactory {
  static build(params) : WorkoutPlan {
    const workoutPlanParams = params['workout_plan'];
    return new WorkoutPlan({
      id: workoutPlanParams.id,
      name: workoutPlanParams.name
    });
  }
}
