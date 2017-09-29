import { TestBed, inject } from '@angular/core/testing';

import { ApptService } from './appt.service';

describe('ApptService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApptService]
    });
  });

  it('should be created', inject([ApptService], (service: ApptService) => {
    expect(service).toBeTruthy();
  }));
});
