import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { User } from 'src/app/models/user';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.scss']
})
export class NewStudentComponent implements OnInit {

  student: Student = new Student({user: new User({name: '', email: ''})});
  formErrors: Array<String> = [];

  constructor(private service: StudentService, private router: Router) { }

  ngOnInit(): void {
  }

  save(){
    this.service.create(this.student)
      .subscribe(
        response => this.router.navigateByUrl(`/students/${response['student']['id']}`),
        error => this.formErrors = error.error.errors
      )
  }

}
