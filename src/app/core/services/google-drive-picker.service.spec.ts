import { TestBed } from '@angular/core/testing';

import { GoogleDrivePickerService } from './google-drive-picker.service';

describe('GoogleDrivePickerService', () => {
  let service: GoogleDrivePickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleDrivePickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
