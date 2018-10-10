import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneNumberAuthModalComponent } from './phone-number-auth-modal.component';

describe('PhoneNumberAuthModalComponent', () => {
  let component: PhoneNumberAuthModalComponent;
  let fixture: ComponentFixture<PhoneNumberAuthModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneNumberAuthModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneNumberAuthModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
