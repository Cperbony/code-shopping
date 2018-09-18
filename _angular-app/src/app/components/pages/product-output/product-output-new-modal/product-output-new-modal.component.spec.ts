import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOutputNewModalComponent } from './product-output-new-modal.component';

describe('ProductOutputNewModalComponent', () => {
  let component: ProductOutputNewModalComponent;
  let fixture: ComponentFixture<ProductOutputNewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductOutputNewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductOutputNewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
