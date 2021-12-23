import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Schedule } from 'src/app/models/schedule';

import { ScheduleService } from './schedule.service';

describe('ScheduleService', () => {
  let service: ScheduleService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let schedule: Schedule = new Schedule({});

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get','post', 'put']);
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: httpClientSpy }
      ]
    });
    service = TestBed.inject(ScheduleService);
    localStorage.setItem('authToken', '1q2w3e4r');
  });

  afterAll(() => localStorage.clear());

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#create should call post method', () => {
    service.create(schedule);
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
    service.update(schedule);
    expect(httpClientSpy.put.calls.count()).toBe(1);
  })
});
