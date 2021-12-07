import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private router: Router) { }

  call():void {
    const authToken = localStorage.getItem("authToken");
    if (authToken === null){
      this.router.navigateByUrl("");
    } else {
      const decodedToken = jwt_decode(authToken);
      if (decodedToken['kind'] !== 'personal')
        this.router.navigateByUrl("");
    }
  }
}
