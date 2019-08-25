import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortColumnComponent } from './sort-column.component';

describe('SortColumnComponent', () => {
  let component: SortColumnComponent;
  let fixture: ComponentFixture<SortColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
