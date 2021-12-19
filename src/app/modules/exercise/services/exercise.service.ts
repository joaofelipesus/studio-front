import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HeaderHandlerService } from 'src/app/services/header-handler.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  private BASE_ROUTE = `${environment.apiURL}/exercises`

  constructor(private httpClient: HttpClient, private headerService: HeaderHandlerService) { }

  create(exercise) : Observable<any> {
    return this.httpClient.post(this.BASE_ROUTE, exercise, this.headerService.setupHeaders());
  }
}
