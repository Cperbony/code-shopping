import { TestBed, inject } from '@angular/core/testing';

import { ChatGroupUserHttpService } from './chat-group-user-http.service';

describe('ChatGroupUserHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatGroupUserHttpService]
    });
  });

  it('should be created', inject([ChatGroupUserHttpService], (service: ChatGroupUserHttpService) => {
    expect(service).toBeTruthy();
  }));
});
