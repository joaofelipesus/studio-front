import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthenticateService } from 'src/app/modules/home/services/authenticate.service'
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = ''
  password: string = ''

  errors: Array<String> = [];

  constructor(private service: AuthenticateService, private router: Router) {}

  ngOnInit(): void {}

  login() : void {
    this.service.authenticate(this.email, this.password)
      .subscribe(
        response => {
          localStorage.setItem('authToken', response.token);
          this.router.navigateByUrl("home/personal")
        },
        error => this.errors = error.error.errors as Array<String>
      )
  }
}
