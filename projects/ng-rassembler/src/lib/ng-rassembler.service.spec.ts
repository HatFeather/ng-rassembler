import { TestBed } from '@angular/core/testing';

import { NgRassemblerService } from './ng-rassembler.service';

describe('NgRassemblerService', () => {
  let service: NgRassemblerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgRassemblerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
