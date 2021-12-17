import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateExerciseComponent } from './views/exercises/create-exercise/create-exercise.component';
import { ListExerciseComponent } from './views/exercises/list-exercise/list-exercise.component';
import { ShowExerciseComponent } from './views/exercises/show-exercise/show-exercise.component';
import { UpdateExerciseComponent } from './views/exercises/update-exercise/update-exercise.component';
import { HomeComponent } from './views/home/home/home.component';
import { PersonalComponent } from './views/home/personal/personal.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: () => import('src/app/modules/home/home.module').then((m) => m.HomeModule) }
  // {path: 'home', component: HomeComponent},
  // {path: 'login', component: LoginComponent},
  // {path: 'home/personal', component: PersonalComponent},
  // {path: 'exercises/new', component: CreateExerciseComponent},
  // {path: 'exercises/:id', component: ShowExerciseComponent},
  // {path: 'exercises/:id/edit', component: UpdateExerciseComponent},
  // {path: 'exercises', component: ListExerciseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
