import { TestBed, inject } from '@angular/core/testing';

import { ReferenceHelperService } from './reference-helper.service';

describe('ReferenceHelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReferenceHelperService]
    });
  });

  it('should be created', inject([ReferenceHelperService], (service: ReferenceHelperService) => {
    expect(service).toBeTruthy();
  }));
});
