import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { ListStudentComponent } from './list-student/list-student.component';
import { ShowStudentComponent } from './show-student/show-student.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [ListStudentComponent, ShowStudentComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    ComponentsModule
  ]
})
export class StudentModule { }
