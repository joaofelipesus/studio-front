import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderHandlerService {

  constructor() { }

  // Setup request headers.
  call() : Object {
    const token = localStorage.getItem("authToken");
    return {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    };
  }
}
