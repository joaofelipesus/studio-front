import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ExerciseService } from './exercise.service';

describe('ExerciseService', () => {
  let service: ExerciseService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

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
    service.create({ name: 'Some name', muscular_group_id: '1q2w3e4r' });
    expect(httpClientSpy.post.calls.count()).toBe(1);
  })
});
