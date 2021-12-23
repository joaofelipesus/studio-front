import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from 'src/app/models/student';
import { HeaderHandlerService } from 'src/app/services/header-handler.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private BASE_URL = `${environment.apiURL}/students`

  constructor(private httpClient: HttpClient, private headerService: HeaderHandlerService) { }

  list(page) {
    return this.httpClient.get(`${this.BASE_URL}?page=${page}`, this.headerService.setupHeaders());
  }

  listAll() {
    return this.httpClient.get(`${this.BASE_URL}?all=true`, this.headerService.setupHeaders());
  }

  find(id) {
    return this.httpClient.get(`${this.BASE_URL}/${id}`, this.headerService.setupHeaders());
  }

  create(student : Student) {
    return this.httpClient.post(this.BASE_URL, this.generatePayload(student),this.headerService.setupHeaders());
  }

  update(student : Student) {
    return this.httpClient.put(`${this.BASE_URL}/${student.id}`, this.generatePayload(student),this.headerService.setupHeaders());
  }

  private generatePayload(student: Student) : Object {
    return {
      user_attributes: {
        email: student.user.email,
        name: student.user.name
      }
    }
  }

}
