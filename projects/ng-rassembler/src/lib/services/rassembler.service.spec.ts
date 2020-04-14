import { TestBed } from '@angular/core/testing';

import { RassemblerService } from './rassembler.service';

describe('RassemblerService', () => {
  let service: RassemblerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RassemblerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
