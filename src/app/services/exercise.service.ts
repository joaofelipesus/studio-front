import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HeaderHandlerService } from './header-handler.service';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  private baseUrl: string = `${environment.apiURL}/exercises`;

  constructor(private httpClient: HttpClient, private headers: HeaderHandlerService) { }

   list(page=1) {
    return this.httpClient.get(`${this.baseUrl}?page=${page}`, this.headers.call())
  }

  get(id) {
    return this.httpClient.get(`${this.baseUrl}/${id}`, this.headers.call());
  }

  update(id, body) {
    return this.httpClient.put(`${this.baseUrl}/${id}`, body, this.headers.call())
  }

  create(body) {
    return this.httpClient.post(this.baseUrl, body, this.headers.call())
  }
}
