import { TestBed } from '@angular/core/testing';

import { ModalProductService } from './modal-product.service';

describe('ModalProductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModalProductService = TestBed.get(ModalProductService);
    expect(service).toBeTruthy();
  });
});
