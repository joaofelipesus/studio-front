import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: () => import('src/app/modules/home/home.module').then((m) => m.HomeModule) },
  {path: 'exercises', loadChildren: () => import('src/app/modules/exercise/exercise.module').then((m) => m.ExerciseModule) }
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
