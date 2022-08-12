import { TestBed } from '@angular/core/testing';

import { EncrypDecrypService } from './encryp-decryp.service';

describe('EncrypDecrypService', () => {
  let service: EncrypDecrypService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncrypDecrypService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
