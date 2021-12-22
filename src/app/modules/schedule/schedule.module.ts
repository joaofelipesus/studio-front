import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components.module'
import { ScheduleRoutingModule } from './schedule-routing.module';
import { FormsModule } from '@angular/forms';
import { ListScheduleComponent } from './list-schedule/list-schedule.component';


@NgModule({
  declarations: [ListScheduleComponent],
  imports: [
    CommonModule,
    ScheduleRoutingModule,
    FormsModule,
    ComponentsModule
  ]
})
export class ScheduleModule { }
