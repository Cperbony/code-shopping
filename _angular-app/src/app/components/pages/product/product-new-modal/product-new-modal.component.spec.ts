import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductNewModalComponent } from './product-new-modal.component';

describe('ProductNewModalComponent', () => {
  let component: ProductNewModalComponent;
  let fixture: ComponentFixture<ProductNewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductNewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductNewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
