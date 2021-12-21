import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { ListStudentComponent } from './list-student/list-student.component';
import { ShowStudentComponent } from './show-student/show-student.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { NewStudentComponent } from './new-student/new-student.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ListStudentComponent, ShowStudentComponent, NewStudentComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    ComponentsModule,
    FormsModule
  ]
})
export class StudentModule { }
