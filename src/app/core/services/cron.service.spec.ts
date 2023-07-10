import { TestBed } from '@angular/core/testing';

import { CronService } from './cron.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CronService', () => {
  let service: CronService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
    });
    service = TestBed.inject(CronService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
