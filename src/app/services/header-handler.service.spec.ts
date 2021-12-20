import { TestBed } from '@angular/core/testing';

import { HeaderHandlerService } from './header-handler.service';

describe('HeaderHandlerService', () => {
  let service: HeaderHandlerService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#setupHeaders should throw an error when user doesnt have a session', () => {
    expect(() => service.setupHeaders()).toThrow()
  })

  it('#setupHeaders should return a object with api default headers', () => {
    localStorage.setItem('authToken', '1q2w3e4r');
    expect(service.setupHeaders()).toEqual({
      headers: {
        'Authorization': `Bearer 1q2w3e4r`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
  })
});
