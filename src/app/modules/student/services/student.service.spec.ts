import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { StudentService } from './student.service';

describe('StudentService', () => {
  let service: StudentService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get','post', 'put']);
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: httpClientSpy }
      ]
    });
    service = TestBed.inject(StudentService);
    localStorage.setItem('authToken', '1q2w3e4r');
  });

  afterAll(() => localStorage.clear());

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#list should call get method one time', () => {
    service.list(1)
    expect(httpClientSpy.get.calls.count()).toBe(1);
  })

  it('#find should call get method one time', () => {
    service.find('1q2w3e')
    expect(httpClientSpy.get.calls.count()).toBe(1);
  })

});
