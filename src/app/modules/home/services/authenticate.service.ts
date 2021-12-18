import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private httpClient: HttpClient) { }

  authenticate(email, password) : Observable<any>{
    return this.httpClient.post(`${environment.apiURL}/users/login`, { email: email, password: password })
  }
}
