import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryNewModalComponent } from './category-new-modal.component';

describe('CategoryNewModalComponent', () => {
  let component: CategoryNewModalComponent;
  let fixture: ComponentFixture<CategoryNewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryNewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryNewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
