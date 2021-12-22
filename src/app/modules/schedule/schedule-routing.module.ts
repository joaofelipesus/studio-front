import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListScheduleComponent } from './list-schedule/list-schedule.component';

const routes: Routes = [
  {path: '', component: ListScheduleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleRoutingModule { }
