import { Exercise } from "../models/exercise";
import { MuscularGroup } from "../models/muscular_group";

export class ExerciseFactory {
  static build(params) : Exercise {
    const exerciseParams = params["exercise"];
    return new Exercise(
      exerciseParams.id,
      exerciseParams.name,
      exerciseParams.muscular_group_id,
      new MuscularGroup(
        exerciseParams.muscular_group_id,
        exerciseParams.muscular_group.name
      )
    );
  }
}
