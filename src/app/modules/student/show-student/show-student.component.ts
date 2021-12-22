import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { StudentFactory } from 'src/app/factories/student_factory';
import { Student } from 'src/app/models/student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-show-student',
  templateUrl: './show-student.component.html',
  styleUrls: ['./show-student.component.scss']
})
export class ShowStudentComponent implements OnInit {

  student: Student = new Student({});
  errorMessages: Array<String> = [];

  constructor(private service: StudentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.student.id = params.get("id");
      this.service.find(this.student.id)
        .subscribe(
          response => this.student = StudentFactory.build(response),
          error => this.handleError(error)
        )
    })
  }

  private handleError(error) : void {
    {
      if (error.status === 404)
        this.errorMessages = ["Aluno não encontrado"]
      else
        console.log(error)
    }
  }

}
