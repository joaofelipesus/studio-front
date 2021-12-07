import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
  }

  // NOTE: extract to service!
  login(){
    let params = {email: this.email, password: this.password}
    this.httpClient.post(`${environment.apiURL}/users/login`, params).subscribe((response) => {
      const token = response['token'];
      localStorage.setItem("authToken", token);
      // TODO: redirect to home path!
    })
  }
}
