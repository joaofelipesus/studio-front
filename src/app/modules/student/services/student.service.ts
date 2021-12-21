import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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


}
