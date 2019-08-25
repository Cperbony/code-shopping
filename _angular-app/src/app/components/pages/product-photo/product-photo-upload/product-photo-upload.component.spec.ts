import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPhotoUploadComponent } from './product-photo-upload.component';

describe('ProductPhotoUploadComponent', () => {
  let component: ProductPhotoUploadComponent;
  let fixture: ComponentFixture<ProductPhotoUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPhotoUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPhotoUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
