import { TestBed, inject } from '@angular/core/testing';

import { DocwriterService } from './docwriter.service';

describe('DocwriterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DocwriterService]
    });
  });

  it('should be created', inject([DocwriterService], (service: DocwriterService) => {
    expect(service).toBeTruthy();
  }));
});
