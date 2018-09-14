import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPhotoDeleteModalComponent } from './product-photo-delete-modal.component';

describe('ProductPhotoDeleteModalComponent', () => {
  let component: ProductPhotoDeleteModalComponent;
  let fixture: ComponentFixture<ProductPhotoDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPhotoDeleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPhotoDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
