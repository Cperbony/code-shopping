import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatGroupUserDeleteComponent } from './chat-group-user-delete.component';

describe('ChatGroupUserDeleteComponent', () => {
  let component: ChatGroupUserDeleteComponent;
  let fixture: ComponentFixture<ChatGroupUserDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatGroupUserDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatGroupUserDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
