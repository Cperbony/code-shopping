import { TestBed, inject } from '@angular/core/testing';

import { RefreshTokenInterceptorService } from './refresh-token-interceptor.service';

describe('RefreshTokenInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RefreshTokenInterceptorService]
    });
  });

  it('should be created', inject([RefreshTokenInterceptorService], (service: RefreshTokenInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
