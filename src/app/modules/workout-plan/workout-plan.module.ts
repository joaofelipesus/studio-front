import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkoutPlanRoutingModule } from './workout-plan-routing.module';
import { ListWorkoutPlanComponent } from './list-workout-plan/list-workout-plan.component';


@NgModule({
  declarations: [ListWorkoutPlanComponent],
  imports: [
    CommonModule,
    WorkoutPlanRoutingModule
  ]
})
export class WorkoutPlanModule { }
