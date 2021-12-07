import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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

  login(){
    let params = {email: this.email, password: this.password}
    this.httpClient.post("http://localhost:3000/api/users/login", params).subscribe((response) => {
      const token = response['token'];
      localStorage.setItem("authToken", token);
      // TODO: redirect to home path!
    })
  }
}
