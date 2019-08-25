import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPhotoEditModalComponent } from './product-photo-edit-modal.component';

describe('ProductPhotoEditModalComponent', () => {
  let component: ProductPhotoEditModalComponent;
  let fixture: ComponentFixture<ProductPhotoEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPhotoEditModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPhotoEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
