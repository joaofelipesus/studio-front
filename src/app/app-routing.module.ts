import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateExerciseComponent } from './views/exercises/create-exercise/create-exercise.component';
import { ShowExerciseComponent } from './views/exercises/show-exercise/show-exercise.component';
import { HomeComponent } from './views/home/home/home.component';
import { LoginComponent } from './views/home/login/login.component';
import { PersonalComponent } from './views/home/personal/personal.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home/personal', component: PersonalComponent},
  {path: 'exercises/new', component: CreateExerciseComponent},
  {path: 'exercises/:id', component: ShowExerciseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
