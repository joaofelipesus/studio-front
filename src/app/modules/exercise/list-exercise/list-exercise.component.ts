import { Component, OnInit } from '@angular/core';
import { ExerciseFactory } from 'src/app/factories/exercise_factory';
import { Exercise } from 'src/app/models/exercise';
import { ExerciseService } from '../services/exercise.service';

@Component({
  selector: 'app-list-exercise',
  templateUrl: './list-exercise.component.html',
  styleUrls: ['./list-exercise.component.scss']
})
export class ListExerciseComponent implements OnInit {

  exercises : Array<Exercise> = [];
  tableMetadata = {
    currentPage: 1,
    totalPages: 1,
    elements: []
  };

  constructor(private service: ExerciseService) { }

  ngOnInit(): void {
    this.service.list()
      .subscribe(
        response => {
          this.tableMetadata.elements = response['exercises'].map(e => ExerciseFactory.build(e))
          this.tableMetadata.totalPages = response['total_pages']
          this.tableMetadata.currentPage = response['current_page']
        },
        error => console.log(error)
      )
  }

}
