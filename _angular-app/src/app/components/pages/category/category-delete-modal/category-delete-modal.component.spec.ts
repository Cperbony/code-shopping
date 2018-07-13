import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryDeleteModalComponent } from './category-delete-modal.component';

describe('CategoryDeleteModalComponent', () => {
  let component: CategoryDeleteModalComponent;
  let fixture: ComponentFixture<CategoryDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryDeleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
