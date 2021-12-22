import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { WorkoutPlanFactory } from 'src/app/factories/workout_plan_factory';
import { WorkoutPlan } from 'src/app/models/workout_plan';
import { WorkoutPlanService } from '../services/workout-plan.service';

@Component({
  selector: 'app-edit-workout-plan',
  templateUrl: './edit-workout-plan.component.html',
  styleUrls: ['./edit-workout-plan.component.scss']
})
export class EditWorkoutPlanComponent implements OnInit {

  workoutPlan: WorkoutPlan = new WorkoutPlan({});
  errorMessages: Array<String> = [];

  constructor(private service: WorkoutPlanService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.workoutPlan.id = params.get("id");
      this.service.find(this.workoutPlan.id).subscribe(
        response => this.workoutPlan = WorkoutPlanFactory.build(response),
        error => this.handleError(error)
      )
    })
  }

  save() {
    this.service.update(this.workoutPlan)
      .subscribe(
        _response => this.router.navigateByUrl(`/workout_plans/${this.workoutPlan.id}`),
        error => this.handleError(error)
      )
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
