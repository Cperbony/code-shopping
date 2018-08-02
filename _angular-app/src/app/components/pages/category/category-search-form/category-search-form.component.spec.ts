import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySearchFormComponent } from './category-search-form.component';

describe('CategorySearchFormComponent', () => {
  let component: CategorySearchFormComponent;
  let fixture: ComponentFixture<CategorySearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorySearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorySearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
