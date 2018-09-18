import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOutputFormComponent } from './product-output-form.component';

describe('ProductOutputFormComponent', () => {
  let component: ProductOutputFormComponent;
  let fixture: ComponentFixture<ProductOutputFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductOutputFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductOutputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
