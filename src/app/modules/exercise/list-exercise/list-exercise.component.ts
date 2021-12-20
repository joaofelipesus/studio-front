import { Component, OnInit } from '@angular/core';
import { ExerciseFactory } from 'src/app/factories/exercise_factory';
import { Exercise } from 'src/app/models/exercise';
import { TableMetadata } from 'src/app/OLD_components/table/table_metadata';
import { PaginatorService } from 'src/app/services/paginator.service';
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
    this.updateTableContent(1);
  }

  nextPage(){
    this.updateTableContent(this.tableMetadata.currentPage + 1);
  }

  previousPage() {
    this.updateTableContent(this.tableMetadata.currentPage - 1);
  }

  private updateTableContent(page) {
    this.service.list(page)
      .subscribe(
        response => this.tableMetadata = PaginatorService.call(response, ExerciseFactory, 'exercises'),
        error => console.log(error)
      )
  }

}
