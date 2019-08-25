import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInputNewModalComponent } from './product-input-new-modal.component';

describe('ProductInputNewModalComponent', () => {
  let component: ProductInputNewModalComponent;
  let fixture: ComponentFixture<ProductInputNewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductInputNewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductInputNewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
