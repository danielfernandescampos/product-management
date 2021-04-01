import { TestBed } from '@angular/core/testing';

import { StorageModalService } from './storage-modal.service';

describe('StorageModalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StorageModalService = TestBed.get(StorageModalService);
    expect(service).toBeTruthy();
  });
});
