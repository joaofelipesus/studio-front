import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components.module'
import { ScheduleRoutingModule } from './schedule-routing.module';
import { FormsModule } from '@angular/forms';
import { ListScheduleComponent } from './list-schedule/list-schedule.component';
import { ShowScheduleComponent } from './show-schedule/show-schedule.component';
import { EditScheduleComponent } from './edit-schedule/edit-schedule.component';
import { WorkoutPlanModule } from '../workout-plan/workout-plan.module';


@NgModule({
  declarations: [ListScheduleComponent, ShowScheduleComponent, EditScheduleComponent],
  imports: [
    CommonModule,
    ScheduleRoutingModule,
    FormsModule,
    ComponentsModule,
    WorkoutPlanModule
  ]
})
export class ScheduleModule { }
