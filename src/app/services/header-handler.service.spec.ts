import { TestBed } from '@angular/core/testing';

import { HeaderHandlerService } from './header-handler.service';

describe('HeaderHandlerService', () => {
  let service: HeaderHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
