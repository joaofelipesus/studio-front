import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListWorkoutPlanComponent } from './list-workout-plan/list-workout-plan.component';

const routes: Routes = [
  {path: '', component: ListWorkoutPlanComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkoutPlanRoutingModule { }
