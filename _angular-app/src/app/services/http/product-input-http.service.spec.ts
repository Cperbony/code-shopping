import { TestBed, inject } from '@angular/core/testing';

import { ProductInputHttpService } from './product-input-http.service';

describe('ProductInputHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductInputHttpService]
    });
  });

  it('should be created', inject([ProductInputHttpService], (service: ProductInputHttpService) => {
    expect(service).toBeTruthy();
  }));
});
