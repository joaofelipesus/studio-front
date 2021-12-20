import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseRoutingModule } from './exercise-routing.module';
import { NewExerciseComponent } from './new-exercise/new-exercise.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule } from '@angular/forms';
import { ShowExerciseComponent } from './show-exercise/show-exercise.component';
import { ListExerciseComponent } from './list-exercise/list-exercise.component';


@NgModule({
  declarations: [NewExerciseComponent, ShowExerciseComponent, ListExerciseComponent],
  imports: [
    CommonModule,
    ExerciseRoutingModule,
    ComponentsModule,
    FormsModule
  ]
})
export class ExerciseModule { }
