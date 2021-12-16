import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ExerciseFactory } from '../factories/exercise_factory';
import { Exercise } from '../models/exercise';
import { HeaderHandlerService } from './header-handler.service';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  private baseUrl: string = `${environment.apiURL}/exercises`;

  constructor(private httpClient: HttpClient, private headers: HeaderHandlerService) { }

   list (page=1) {
    return this.httpClient.get(`${this.baseUrl}?page=${page}`, this.headers.call())
  }
}
