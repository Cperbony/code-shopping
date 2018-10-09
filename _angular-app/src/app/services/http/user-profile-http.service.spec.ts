import { TestBed, inject } from '@angular/core/testing';

import { UserProfileHttpService } from './user-profile-http.service';

describe('UserProfileHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserProfileHttpService]
    });
  });

  it('should be created', inject([UserProfileHttpService], (service: UserProfileHttpService) => {
    expect(service).toBeTruthy();
  }));
});
