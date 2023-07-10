import { TestBed } from '@angular/core/testing';

import { CustomPreloadingService } from './custom-preloading.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CustomPreloadingService', () => {
  let service: CustomPreloadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
    });
    service = TestBed.inject(CustomPreloadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
