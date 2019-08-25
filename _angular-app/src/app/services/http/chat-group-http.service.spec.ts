import { TestBed, inject } from '@angular/core/testing';

import { ChatGroupHttpService } from './chat-group-http.service';

describe('ChatGroupHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatGroupHttpService]
    });
  });

  it('should be created', inject([ChatGroupHttpService], (service: ChatGroupHttpService) => {
    expect(service).toBeTruthy();
  }));
});
