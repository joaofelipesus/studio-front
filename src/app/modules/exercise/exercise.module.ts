import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciseRoutingModule } from './exercise-routing.module';
import { NewExerciseComponent } from './new-exercise/new-exercise.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [NewExerciseComponent],
  imports: [
    CommonModule,
    ExerciseRoutingModule,
    ComponentsModule
  ]
})
export class ExerciseModule { }
