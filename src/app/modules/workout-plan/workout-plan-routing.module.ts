import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListWorkoutPlanComponent } from './list-workout-plan/list-workout-plan.component';
import { ShowWorkoutPlanComponent } from './show-workout-plan/show-workout-plan.component';

const routes: Routes = [
  {path: '', component: ListWorkoutPlanComponent},
  {path: ':id', component: ShowWorkoutPlanComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkoutPlanRoutingModule { }
