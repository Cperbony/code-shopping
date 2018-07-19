import { TestBed, inject } from '@angular/core/testing';

import { ProductHttpService } from './product-http.service';

describe('ProductHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductHttpService]
    });
  });

  it('should be created', inject([ProductHttpService], (service: ProductHttpService) => {
    expect(service).toBeTruthy();
  }));
});
