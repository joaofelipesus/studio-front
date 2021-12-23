import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentFactory } from 'src/app/factories/student_factory';
import { WorkoutPlanFactory } from 'src/app/factories/workout_plan_factory';
import { Schedule } from 'src/app/models/schedule';
import { Student } from 'src/app/models/student';
import { WorkoutPlan } from 'src/app/models/workout_plan';
import { StudentService } from '../../student/services/student.service';
import { WorkoutPlanService } from '../../workout-plan/services/workout-plan.service';
import { ScheduleService } from '../services/schedule.service';

@Component({
  selector: 'app-new-schedule',
  templateUrl: './new-schedule.component.html',
  styleUrls: ['./new-schedule.component.scss']
})
export class NewScheduleComponent implements OnInit {

  schedule: Schedule = new Schedule({});
  errorMessages: Array<String> = [];
  workoutPlans: Array<WorkoutPlan> = [];
  students: Array<Student> = [];

  constructor(private service: ScheduleService, private router: Router,
              private workoutPlanService: WorkoutPlanService, private studentService: StudentService) { }

  ngOnInit(): void {
    this.workoutPlanService.listAll().subscribe(
      response => this.workoutPlans = response['workout_plans'].map(w => WorkoutPlanFactory.build(w)),
      error => console.log(error)
    )

    this.studentService.listAll().subscribe(
      response => this.students = response['students'].map(s => StudentFactory.build(s)),
      error => console.log(error)
    )
  }

  save() {
    console.log(this.schedule)
    this.service.create(this.schedule).subscribe(
      response => this.router.navigateByUrl(`/schedules/${response['schedule']['id']}`),
      error => this.errorMessages = error.error.errors
    )
  }

  startAtChange(){
    const startAt: string = this.schedule.startAt;
    if(startAt.length === 2)
      this.schedule.startAt += ':'
    if (startAt.length > 2 && !startAt.includes(':')) {
      const start = startAt.slice(0, 2)
      this.schedule.startAt = `${start}:${start[start.length - 1]}`
    }
  }

}
