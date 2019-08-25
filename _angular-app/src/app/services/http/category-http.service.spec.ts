import { TestBed, inject } from '@angular/core/testing';

import { CategoryHttpService } from './category-http.service';

describe('CategoryHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoryHttpService]
    });
  });

  it('should be created', inject([CategoryHttpService], (service: CategoryHttpService) => {
    expect(service).toBeTruthy();
  }));
});
