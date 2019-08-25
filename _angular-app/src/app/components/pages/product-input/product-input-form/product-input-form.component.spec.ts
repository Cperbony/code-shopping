import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInputFormComponent } from './product-input-form.component';

describe('ProductInputFormComponent', () => {
  let component: ProductInputFormComponent;
  let fixture: ComponentFixture<ProductInputFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductInputFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
