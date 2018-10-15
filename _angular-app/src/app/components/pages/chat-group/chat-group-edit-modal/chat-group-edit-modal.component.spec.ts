import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatGroupEditModalComponent } from './chat-group-edit-modal.component';

describe('ChatGroupEditModalComponent', () => {
  let component: ChatGroupEditModalComponent;
  let fixture: ComponentFixture<ChatGroupEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatGroupEditModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatGroupEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
