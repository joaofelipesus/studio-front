import { Component, OnInit } from '@angular/core';
import { WorkoutPlan } from 'src/app/models/workout_plan';
import { PaginatorService } from 'src/app/services/paginator.service';
import { WorkoutPlanService } from '../services/workout-plan.service';
import { WorkoutPlanFactory } from 'src/app/factories/workout_plan_factory';

@Component({
  selector: 'app-list-workout-plan',
  templateUrl: './list-workout-plan.component.html',
  styleUrls: ['./list-workout-plan.component.scss']
})
export class ListWorkoutPlanComponent implements OnInit {

  workoutPlans : Array<WorkoutPlan> = [];
  tableMetadata: any = {
    currentPage: 1,
    totalPages: 1,
    elements: []
  };

  constructor(private service: WorkoutPlanService) { }

  ngOnInit(): void {
    this.updateTableContent(1);
  }

  nextPage(){
    this.updateTableContent(this.tableMetadata.currentPage + 1);
  }

  previousPage() {
    this.updateTableContent(this.tableMetadata.currentPage - 1);
  }

  private updateTableContent(page) {
    this.service.list(page)
      .subscribe(
        response => this.tableMetadata = PaginatorService.call(response, WorkoutPlanFactory, 'workout_plans'),
        error => console.log(error)
      )
  }

}
