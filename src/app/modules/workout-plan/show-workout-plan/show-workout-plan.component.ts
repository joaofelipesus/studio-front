import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { WorkoutPlanFactory } from 'src/app/factories/workout_plan_factory';
import { WorkoutPlan } from 'src/app/models/workout_plan';
import { WorkoutPlanService } from '../services/workout-plan.service';

@Component({
  selector: 'app-show-workout-plan',
  templateUrl: './show-workout-plan.component.html',
  styleUrls: ['./show-workout-plan.component.scss']
})
export class ShowWorkoutPlanComponent implements OnInit {

  workoutPlan: WorkoutPlan = new WorkoutPlan({});
  errorMessages: Array<String> = [];

  constructor(private service: WorkoutPlanService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.workoutPlan.id = params.get("id");
      this.service.find(this.workoutPlan.id).subscribe(
        response => this.workoutPlan = WorkoutPlanFactory.build(response),
        error => this.handleError(error)
      )
    })
  }

  private handleError(error) : void {
    {
      if (error.status === 404)
        this.errorMessages = ["Exercício não encontrado"]
      else
        console.log(error)
    }
  }

}
