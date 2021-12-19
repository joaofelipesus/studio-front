import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewExerciseComponent } from './new-exercise/new-exercise.component';

const routes: Routes = [
  {path: 'new', component: NewExerciseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciseRoutingModule { }
