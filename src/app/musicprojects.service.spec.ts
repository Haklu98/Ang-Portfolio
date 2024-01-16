import { TestBed } from '@angular/core/testing';

import { MusicprojectsService } from './musicprojects.service';

describe('MusicprojectsService', () => {
  let service: MusicprojectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicprojectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
