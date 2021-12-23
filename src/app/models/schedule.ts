import { WorkoutPlan } from './workout_plan';
import { Student } from './student';

export class Schedule {
  public id? : string;
  public personalId?: string;
  public startAt?: string;
  public status?: string;
  public workoutPlan?: WorkoutPlan;
  public student?: Student;
  public workoutPlanId?: string;
  public studentId?: string;
  public date?: Date;

  constructor(
    { id, personalId, startAt, status, workoutPlan, student, workoutPlanId, studentId, date } :
    { id?: string, personalId?: string, startAt?: string, date?: Date, status?: string, workoutPlan?: WorkoutPlan,
      student?: Student, workoutPlanId?: string, studentId?: string }
  ) {
    this.id = id;
    this.personalId = personalId;
    this.startAt = startAt;
    this.status = status;
    this.workoutPlan = workoutPlan;
    this.student = student;
    this.workoutPlanId = workoutPlanId;
    this.studentId = studentId;
    this.date = date;
  }
}
