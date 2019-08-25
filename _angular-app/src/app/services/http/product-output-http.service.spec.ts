import { TestBed, inject } from '@angular/core/testing';

import { ProductOutputHttpService } from './product-output-http.service';

describe('ProductOutputHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductOutputHttpService]
    });
  });

  it('should be created', inject([ProductOutputHttpService], (service: ProductOutputHttpService) => {
    expect(service).toBeTruthy();
  }));
});
