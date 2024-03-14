import { TestBed } from '@angular/core/testing';

import { FirestoreDataService } from './firestore-data.service';

describe('FirestoreDataService', () => {
  let service: FirestoreDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirestoreDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
