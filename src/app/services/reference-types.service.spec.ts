import { TestBed, inject } from '@angular/core/testing';

import { ReferenceTypesService } from './reference-types.service';

describe('ReferenceTypesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReferenceTypesService]
    });
  });

  it('should be created', inject([ReferenceTypesService], (service: ReferenceTypesService) => {
    expect(service).toBeTruthy();
  }));
});
