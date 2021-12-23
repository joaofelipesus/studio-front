import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Student } from 'src/app/models/student';
import { User } from 'src/app/models/user';

import { StudentService } from './student.service';

describe('StudentService', () => {
  let service: StudentService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let student = new Student({user: new User({email: 'some@cool.email', name: 'Asuka'})})

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

  it('#listAll should call get method one time', () => {
    service.listAll()
    expect(httpClientSpy.get.calls.count()).toBe(1);
  })

  it('#find should call get method one time', () => {
    service.find('1q2w3e')
    expect(httpClientSpy.get.calls.count()).toBe(1);
  })

  it('#update should call put method one time', () => {
    service.update(student)
    expect(httpClientSpy.put.calls.count()).toBe(1);
  })

  it('#create should call post method one time', () => {
    service.create(student)
    expect(httpClientSpy.post.calls.count()).toBe(1);
  })

});
