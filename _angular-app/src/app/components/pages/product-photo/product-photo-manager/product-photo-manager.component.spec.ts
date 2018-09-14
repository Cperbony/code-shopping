import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPhotoManagerComponent } from './product-photo-manager.component';

describe('ProductPhotoManagerComponent', () => {
  let component: ProductPhotoManagerComponent;
  let fixture: ComponentFixture<ProductPhotoManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPhotoManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPhotoManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
