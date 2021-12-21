import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { StudentFactory } from 'src/app/factories/student_factory';
import { Student } from 'src/app/models/student';
import { User } from 'src/app/models/user';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent implements OnInit {

  student: Student = new Student({user: new User({email: '', name: ''})});
  errorMessages: Array<String> = [];

  constructor(private service: StudentService, private route: ActivatedRoute, private router: Router) { }

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

  save() {
    this.service.update(this.student)
      .subscribe(
        _response => this.router.navigateByUrl(`/students/${this.student.id}`),
        error => this.handleError(error)
      )
  }

  private handleError(error) : void {
    {
      if (error.status === 404)
        this.errorMessages = ["Exercício não encontrado"]
      else if (error.status === 400)
        this.errorMessages = error.error.errors
      else
        console.log(error)
    }
  }

}
