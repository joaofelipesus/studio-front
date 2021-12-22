import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: () => import('src/app/modules/home/home.module').then((m) => m.HomeModule) },
  {path: 'exercises', loadChildren: () => import('src/app/modules/exercise/exercise.module').then((m) => m.ExerciseModule) },
  {path: 'students', loadChildren: () => import('src/app/modules/student/student.module').then((m) => m.StudentModule) },
  {path: 'workout_plans', loadChildren: () => import('src/app/modules/workout-plan/workout-plan.module').then((m) => m.WorkoutPlanModule) },
  {path: 'schedules', loadChildren: () => import('src/app/modules/schedule/schedule.module').then((m) => m.ScheduleModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
