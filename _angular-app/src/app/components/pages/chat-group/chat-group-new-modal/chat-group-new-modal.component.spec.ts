import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatGroupNewModalComponent } from './chat-group-new-modal.component';

describe('ChatGroupNewModalComponent', () => {
  let component: ChatGroupNewModalComponent;
  let fixture: ComponentFixture<ChatGroupNewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatGroupNewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatGroupNewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
