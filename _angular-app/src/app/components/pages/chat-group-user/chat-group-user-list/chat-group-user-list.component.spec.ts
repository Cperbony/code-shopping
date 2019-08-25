import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatGroupUserListComponent } from './chat-group-user-list.component';

describe('ChatGroupUserListComponent', () => {
  let component: ChatGroupUserListComponent;
  let fixture: ComponentFixture<ChatGroupUserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatGroupUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatGroupUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
