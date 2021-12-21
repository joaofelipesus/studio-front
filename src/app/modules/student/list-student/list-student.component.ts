import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { PaginatorService } from 'src/app/services/paginator.service';
import { StudentService } from '../services/student.service';
import { StudentFactory } from 'src/app/factories/student_factory';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.scss']
})
export class ListStudentComponent implements OnInit {

  exercises : Array<Student> = [];
  tableMetadata: any = {
    currentPage: 1,
    totalPages: 1,
    elements: []
  };

  constructor(private service: StudentService) { }

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
        response => this.tableMetadata = PaginatorService.call(response, StudentFactory, 'students'),
        error => console.log(error)
      )
  }

}
