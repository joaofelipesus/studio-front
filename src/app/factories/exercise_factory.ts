import { Exercise } from "../models/exercise";

export class ExerciseFactory {
  static build(params) : Exercise {
    const exercise_params = params["exercise"];
    let exercise = new Exercise();
    exercise.id = exercise_params["id"];
    exercise.name = exercise_params["name"];
    exercise.muscularGroup.name = exercise_params["muscular_group"]["name"];
    return exercise;
  }
}
