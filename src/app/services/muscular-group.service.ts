import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HeaderHandlerService } from './header-handler.service';

@Injectable({
  providedIn: 'root'
})
export class MuscularGroupService {

  constructor(private httpClient: HttpClient, private headers: HeaderHandlerService) { }

  list(){
    return this.httpClient.get(`${environment.apiURL}/muscular_groups`, this.headers.call())
  }

}
