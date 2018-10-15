import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatGroupFormComponent } from './chat-group-form.component';

describe('ChatGroupFormComponent', () => {
  let component: ChatGroupFormComponent;
  let fixture: ComponentFixture<ChatGroupFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatGroupFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatGroupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
