import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalAuthenticatedGuard implements CanActivate {

  private SESSION_KEY = 'authToken';

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const session = localStorage.getItem(this.SESSION_KEY);
      if(session === null){
        this.redirectToLoginPage();
        return false;
      } else {
        if(this.isPersonal(session) === false){
          this.redirectToLoginPage();
          localStorage.removeItem(this.SESSION_KEY)
          return false;
        } else if(this.isTokenExpired(session)) {
          this.redirectToLoginPage();
          return false;
        }
      }
      return true;
  }

  private isPersonal(session) : boolean {
    const sessionData = jwtDecode(session);
    return sessionData['kind'] === 'personal';
  }

  private isTokenExpired(session) : boolean {
    const sessionData = jwtDecode(session);
    return (Math.floor((new Date).getTime() / 1000)) >= sessionData['exp']
  }

  private redirectToLoginPage() : void {
    this.router.navigateByUrl('home/login');
  }
}
