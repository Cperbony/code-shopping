import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListErrorComponent } from './list-error.component';

describe('ListErrorComponent', () => {
  let component: ListErrorComponent;
  let fixture: ComponentFixture<ListErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
