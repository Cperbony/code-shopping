import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatGroupListComponent } from './chat-group-list.component';

describe('ChatGroupListComponent', () => {
  let component: ChatGroupListComponent;
  let fixture: ComponentFixture<ChatGroupListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatGroupListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatGroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
