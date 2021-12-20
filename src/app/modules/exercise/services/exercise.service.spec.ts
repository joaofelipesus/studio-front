import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Exercise } from 'src/app/models/exercise';

import { ExerciseService } from './exercise.service';

describe('ExerciseService', () => {
  let service: ExerciseService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let exercise: Exercise = new Exercise('Some name', '1q2w3e4r5t6y');


  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get','post', 'put']);
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: httpClientSpy }
      ]
    });
    service = TestBed.inject(ExerciseService);
    localStorage.setItem('authToken', '1q2w3e4r');
  });

  afterAll(() => localStorage.clear());

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#create should call post method', () => {
    service.create(exercise);
    expect(httpClientSpy.post.calls.count()).toBe(1);
  })

  it('#list should call get method', () => {
    service.list()
    expect(httpClientSpy.get.calls.count()).toBe(1);
  })

  it('#find should call get method', () => {
    service.find('1q2w3e4r5t')
    expect(httpClientSpy.get.calls.count()).toBe(1);
  })

  it('#update should call put method', () => {
    service.update('1q2w3e4r', exercise);
    expect(httpClientSpy.put.calls.count()).toBe(1);
  })
});
