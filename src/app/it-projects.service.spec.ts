import { TestBed } from '@angular/core/testing';

import { ItProjectsService } from './it-projects.service';

describe('ItProjectsService', () => {
  let service: ItProjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItProjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
