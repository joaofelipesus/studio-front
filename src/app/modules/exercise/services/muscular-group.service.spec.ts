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

  xit('#list should return an observable')
});
