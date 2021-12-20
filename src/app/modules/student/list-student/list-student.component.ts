import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.scss']
})
export class ListStudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // exercises : Array<Exercise> = [];
  // tableMetadata: any = {
  //   currentPage: 1,
  //   totalPages: 1,
  //   elements: []
  // };

  // constructor(private service: ExerciseService) { }

  // ngOnInit(): void {
  //   this.updateTableContent(1);
  // }

  // nextPage(){
  //   this.updateTableContent(this.tableMetadata.currentPage + 1);
  // }

  // previousPage() {
  //   this.updateTableContent(this.tableMetadata.currentPage - 1);
  // }

  // private updateTableContent(page) {
  //   this.service.list(page)
  //     .subscribe(
  //       response => this.tableMetadata = PaginatorService.call(response, StudentFactory, 'exercises'),
  //       error => console.log(error)
  //     )
  // }

}
