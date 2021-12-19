import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderHandlerService {

  constructor() { }

  // TODO: remove!
  // Setup request headers.
  call() : Object {
    return this.setupHeaders();
  }

  // Setup request headers.
  setupHeaders() {
    const token = localStorage.getItem("authToken");
    if(!token) {
      throw "User doesn't have a session!"
    }

    return this.headers(token);
  }

  private headers(token) : Object {
    return {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    };
  }
}
