import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { MuscularGroupService } from './muscular-group.service';

describe('MuscularGroupService', () => {
  let service: MuscularGroupService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: httpClientSpy }
      ]
    });
    service = TestBed.inject(MuscularGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#list should return an observable', () => {
    localStorage.setItem('authToken', '1q2w3e4r');
    service.list();
    expect(httpClientSpy.get.calls.count()).toBe(1);
  })
});
