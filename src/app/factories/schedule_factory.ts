import { Schedule } from "../models/schedule";
import { WorkoutPlanFactory } from './workout_plan_factory';
import { StudentFactory } from './student_factory';

export class ScheduleFactory {
  static build(params) : Schedule {
    const scheduleParams = params['schedule'];
    return new Schedule({
      id: scheduleParams.id,
      personalId: scheduleParams.personal_id,
      startAt: new Date(scheduleParams.start_at),
      status: scheduleParams.status,
      workoutPlan: WorkoutPlanFactory.build(scheduleParams),
      student: StudentFactory.build(scheduleParams),
      workoutPlanId: scheduleParams.workout_plan_id,
      studentId: scheduleParams.student_id
    });
  }
}
