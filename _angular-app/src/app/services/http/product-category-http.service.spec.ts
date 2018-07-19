import { TestBed, inject } from '@angular/core/testing';

import { ProductCategoryHttpService } from './product-category-http.service';

describe('ProductCategoryHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductCategoryHttpService]
    });
  });

  it('should be created', inject([ProductCategoryHttpService], (service: ProductCategoryHttpService) => {
    expect(service).toBeTruthy();
  }));
});
