import { Component, OnInit } from '@angular/core';
import { ExerciseFactory } from 'src/app/factories/exercise_factory';
import { Exercise } from 'src/app/models/exercise';
import { ExerciseService } from 'src/app/services/exercise.service';
import { TableMetadata } from 'src/app/OLD_components/table/table_metadata'
import { PaginatorService } from 'src/app/services/paginator.service'

@Component({
  selector: 'app-list-exercise',
  templateUrl: './list-exercise.component.html',
  styleUrls: ['./list-exercise.component.scss']
})
export class ListExerciseComponent implements OnInit {

  tableMetadata : TableMetadata = new TableMetadata();

  constructor(private service: ExerciseService) {}

  ngOnInit(): void {
    this.updateTableContent(this.tableMetadata.currentPage);
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
