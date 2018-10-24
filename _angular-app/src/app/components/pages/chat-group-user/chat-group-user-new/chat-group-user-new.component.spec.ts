import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatGroupUserNewComponent } from './chat-group-user-new.component';

describe('ChatGroupUserNewComponent', () => {
  let component: ChatGroupUserNewComponent;
  let fixture: ComponentFixture<ChatGroupUserNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatGroupUserNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatGroupUserNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
