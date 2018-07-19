import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategoryNewComponent } from './product-category-new.component';

describe('ProductCategoryNewComponent', () => {
  let component: ProductCategoryNewComponent;
  let fixture: ComponentFixture<ProductCategoryNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCategoryNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCategoryNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
