import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryNewEditComponent } from './category-edit-modal.component';

describe('CategoryNewEditComponent', () => {
  let component: CategoryNewEditComponent;
  let fixture: ComponentFixture<CategoryNewEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryNewEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryNewEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
