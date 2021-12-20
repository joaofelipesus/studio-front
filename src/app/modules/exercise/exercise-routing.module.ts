import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateExerciseComponent } from 'src/app/views/exercises/update-exercise/update-exercise.component';
import { EditExerciseComponent } from './edit-exercise/edit-exercise.component';
import { ListExerciseComponent } from './list-exercise/list-exercise.component';
import { NewExerciseComponent } from './new-exercise/new-exercise.component';
import { ShowExerciseComponent } from './show-exercise/show-exercise.component';

const routes: Routes = [
  {path: 'new', component: NewExerciseComponent},
  {path: ':id', component: ShowExerciseComponent},
  {path: '', component: ListExerciseComponent},
  {path: ':id/edit', component: EditExerciseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciseRoutingModule { }
