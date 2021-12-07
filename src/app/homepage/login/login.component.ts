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

  renderError: boolean = false;
  errorMessage: string = "";

  private apiURL = `${environment.apiURL}/users/login`;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {}

  login(){
    let params = {email: this.email, password: this.password}
    this.httpClient.post(this.apiURL, params).subscribe(
      response => this.authenticate(response),
      error => this.renderErrorMessage(error)
    );
  }

  private authenticate(response):void{
    const token = response['token'];
    localStorage.setItem("authToken", token);
    // TODO: redirect to home path!
  }

  private renderErrorMessage(error):void{
    this.renderError = true;
    if(error.status == 403) {
      this.errorMessage = "Email e/ou senha inválido(s)";
    } else {
      this.errorMessage = "Houve uma falha inesperada, por favor tente novamente em alguns instantes."
    }
  }
}
