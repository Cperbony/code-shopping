import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatGroupDeleteModalComponent } from './chat-group-delete-modal.component';

describe('ChatGroupDeleteModalComponent', () => {
  let component: ChatGroupDeleteModalComponent;
  let fixture: ComponentFixture<ChatGroupDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatGroupDeleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatGroupDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
