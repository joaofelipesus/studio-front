import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkoutPlan } from 'src/app/models/workout_plan';
import { WorkoutPlanService } from '../services/workout-plan.service';

@Component({
  selector: 'app-new-workout-plan',
  templateUrl: './new-workout-plan.component.html',
  styleUrls: ['./new-workout-plan.component.scss']
})
export class NewWorkoutPlanComponent implements OnInit {

  workoutplan: WorkoutPlan = new WorkoutPlan({});
  errorMessages: Array<String> = [];

  constructor(private service: WorkoutPlanService, private router: Router) { }

  ngOnInit(): void { }

  save() : void {
    this.service.create(this.workoutplan).
      subscribe(
        response => this.router.navigateByUrl(`/workout_plans/${response['workout_plan']['id']}`),
        error => this.handleError(error)
      );
  }

  private handleError(error) : void {
    {
      if (error.status === 404)
        this.errorMessages = ["Rotina de treino não encontrada"];
      else if (error.status === 400)
        this.errorMessages = error.error.errors;
      else
        console.log(error)
    }
  }

}
