import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ScheduleFactory } from 'src/app/factories/schedule_factory';
import { WorkoutPlanFactory } from 'src/app/factories/workout_plan_factory';
import { Schedule } from 'src/app/models/schedule';
import { WorkoutPlan } from 'src/app/models/workout_plan';
import { WorkoutPlanService } from '../../workout-plan/services/workout-plan.service';
import { ScheduleService } from '../services/schedule.service';

@Component({
  selector: 'app-edit-schedule',
  templateUrl: './edit-schedule.component.html',
  styleUrls: ['./edit-schedule.component.scss']
})
export class EditScheduleComponent implements OnInit {

  errorMessages: Array<String> = [];
  schedule: Schedule = new Schedule({})
  workoutPlans: Array<WorkoutPlan> = [];

  constructor(private service: ScheduleService, private route: ActivatedRoute, private router: Router,
    private workoutPlanService: WorkoutPlanService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.workoutPlanService.listAll().subscribe(
        response => this.workoutPlans = response['workout_plans'].map(w => WorkoutPlanFactory.build(w)),
        error => console.log(error)
      )

      this.schedule.id = params.get("id");
      this.service.find(this.schedule.id).subscribe(
        response => this.schedule = ScheduleFactory.build(response),
        error => this.handleError(error)
      )
    })
  }

  save() {
    this.service.update(this.schedule).subscribe(
      _response => this.router.navigateByUrl(`/schedules/${this.schedule.id}`),
      error => this.handleError(error)
    )
  }

  private handleError(error) : void {
    {
      if (error.status === 404)
        this.errorMessages = ["Horário não encontrado"]
      else if(error.status === 400)
        this.errorMessages = error.error.errors
      else
        console.log(error)
    }
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
