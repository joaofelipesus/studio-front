import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkoutPlanRoutingModule } from './workout-plan-routing.module';
import { ListWorkoutPlanComponent } from './list-workout-plan/list-workout-plan.component';
import { ShowWorkoutPlanComponent } from './show-workout-plan/show-workout-plan.component';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [ListWorkoutPlanComponent, ShowWorkoutPlanComponent],
  imports: [
    CommonModule,
    WorkoutPlanRoutingModule,
    FormsModule,
    ComponentsModule
  ]
})
export class WorkoutPlanModule { }
