import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private SESSION_KEY = 'authToken';

  displayNavbar: boolean = false;

  constructor(private router: Router) {
    router.events.subscribe(_val => this.displayNavbar = false);
  }

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

  toggleNavbar(){
    this.displayNavbar = !this.displayNavbar;
  }

}
