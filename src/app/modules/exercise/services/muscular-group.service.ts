import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeaderHandlerService } from 'src/app/services/header-handler.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MuscularGroupService {

  constructor(private httpClient: HttpClient, private headerService: HeaderHandlerService) { }

  list() {
    return this.httpClient.get(`${environment.apiURL}/muscular_groups`, this.headerService.setupHeaders());
  }
}
