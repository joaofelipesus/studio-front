import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode'
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {

  constructor(private authentication: AuthenticationService, private router: Router){
    this.authentication.call();
  }

  ngOnInit(): void {}

  logout(): void {
    localStorage.removeItem("authToken");
    this.router.navigateByUrl("/");
  }

}
