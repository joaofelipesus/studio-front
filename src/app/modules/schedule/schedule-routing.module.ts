import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditScheduleComponent } from './edit-schedule/edit-schedule.component';
import { ListScheduleComponent } from './list-schedule/list-schedule.component';
import { NewScheduleComponent } from './new-schedule/new-schedule.component';
import { ShowScheduleComponent } from './show-schedule/show-schedule.component';

const routes: Routes = [
  {path: '', component: ListScheduleComponent},
  {path: 'new', component: NewScheduleComponent},
  {path: ':id', component: ShowScheduleComponent},
  {path: ':id/edit', component: EditScheduleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleRoutingModule { }
