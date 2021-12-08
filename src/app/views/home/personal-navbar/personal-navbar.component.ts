import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-navbar',
  templateUrl: './personal-navbar.component.html',
  styleUrls: ['./personal-navbar.component.scss']
})
export class PersonalNavbarComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  logout(): void {
    localStorage.removeItem("authToken");
    this.router.navigateByUrl("/");
  }

}
