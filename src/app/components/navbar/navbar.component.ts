import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private SESSION_KEY = 'authToken';

  constructor(private router: Router) { }

  ngOnInit(): void {}

  logedIn() : boolean {
    const userSession = localStorage.getItem(this.SESSION_KEY);
    if (userSession === null)
      return false;

    return true;
  }

  logout() : void {
    localStorage.removeItem(this.SESSION_KEY);
    this.router.navigateByUrl('');
  }

}
