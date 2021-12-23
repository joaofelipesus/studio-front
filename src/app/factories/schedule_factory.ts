import { Schedule } from "../models/schedule";
import { WorkoutPlanFactory } from './workout_plan_factory';
import { StudentFactory } from './student_factory';

export class ScheduleFactory {
  static build(params) : Schedule {
    const scheduleParams = params['schedule'];
    const dateParams = scheduleParams.date.split('-');
    return new Schedule({
      id: scheduleParams.id,
      personalId: scheduleParams.personal_id,
      startAt: scheduleParams.start_at,
      date: new Date(dateParams[0], dateParams[1] - 1, dateParams[2]),
      status: scheduleParams.status,
      workoutPlan: WorkoutPlanFactory.build(scheduleParams),
      student: StudentFactory.build(scheduleParams),
      workoutPlanId: scheduleParams.workout_plan_id,
      studentId: scheduleParams.student_id
    });
  }
}
