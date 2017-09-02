import { TestBed, inject } from '@angular/core/testing';

import { ConfigOptionsService } from './config-options.service';

describe('ConfigOptionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfigOptionsService]
    });
  });

  it('should be created', inject([ConfigOptionsService], (service: ConfigOptionsService) => {
    expect(service).toBeTruthy();
  }));
});
