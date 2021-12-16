import { Component, OnInit } from '@angular/core';
import { ExerciseFactory } from 'src/app/factories/exercise_factory';
import { Exercise } from 'src/app/models/exercise';
import { ExerciseService } from 'src/app/services/exercise.service';
import { TableMetadata } from 'src/app/components/table/table_metadata'
import { PaginatorService } from 'src/app/services/paginator.service'

@Component({
  selector: 'app-list-exercise',
  templateUrl: './list-exercise.component.html',
  styleUrls: ['./list-exercise.component.scss']
})
export class ListExerciseComponent implements OnInit {

  exercises: Exercise[] = [];
  totalPages: number;
  currentPage: number;

  tableMetadata : TableMetadata = new TableMetadata();

  constructor(private service: ExerciseService) {}

  ngOnInit(): void {
    this.service.list()
      .subscribe(
        response => this.updateTableContent(response),
        error => console.log(error)
      )
  }

  nextPage(){
    this.service.list(this.tableMetadata.currentPage + 1)
      .subscribe(
        response => this.updateTableContent(response),
        error => console.log(error)
      )
  }

  previousPage(){
    this.service.list(this.tableMetadata.currentPage - 1)
      .subscribe(
        response => this.updateTableContent(response),
        error => console.log(error)
      )
  }

  private updateTableContent(response){
    this.tableMetadata = PaginatorService.call(response, ExerciseFactory, 'exercises')
  }

}
