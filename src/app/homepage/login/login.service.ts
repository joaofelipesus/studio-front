import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiURL = `${environment.apiURL}/users/login`;

  constructor(private httpClient: HttpClient) {}

  call(user: User){
    let params = {email: user.email, password: user.password}
    this.httpClient.post(this.apiURL, params).subscribe((response) => {
      const token = response['token'];
      localStorage.setItem("authToken", token);
      // TODO: redirect to home path!
    })
  }
}
