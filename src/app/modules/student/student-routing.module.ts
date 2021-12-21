import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListStudentComponent} from './list-student/list-student.component'
import { ShowStudentComponent } from './show-student/show-student.component';

const routes: Routes = [
  {path: '', component: ListStudentComponent},
  {path: ':id', component: ShowStudentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
