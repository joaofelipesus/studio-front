import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: () => import('src/app/modules/home/home.module').then((m) => m.HomeModule) },
  {path: 'exercises', loadChildren: () => import('src/app/modules/exercise/exercise.module').then((m) => m.ExerciseModule) },
  {path: 'students', loadChildren: () => import('src/app/modules/student/student.module').then((m) => m.StudentModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
