import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { WorkoutPlan } from 'src/app/models/workout_plan';

import { WorkoutPlanService } from './workout-plan.service';

describe('WorkoutPlanService', () => {
  let service: WorkoutPlanService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let workoutPlan = new WorkoutPlan({name: 'Some cool workout plan'});

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get','post', 'put']);
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: httpClientSpy }
      ]
    });
    service = TestBed.inject(WorkoutPlanService);
    localStorage.setItem('authToken', '1q2w3e4r');
  });

  afterAll(() => localStorage.clear());

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#create should call post method', () => {
    service.create(workoutPlan);
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
    service.update(workoutPlan);
    expect(httpClientSpy.put.calls.count()).toBe(1);
  })
});
