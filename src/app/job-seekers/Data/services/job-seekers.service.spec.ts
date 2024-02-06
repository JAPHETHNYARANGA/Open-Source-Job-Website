import { TestBed } from '@angular/core/testing';

import { JobSeekersService } from './job-seekers.service';

describe('JobSeekersService', () => {
  let service: JobSeekersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobSeekersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
