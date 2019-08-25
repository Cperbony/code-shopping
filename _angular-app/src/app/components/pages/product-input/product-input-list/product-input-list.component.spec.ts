import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInputListComponent } from './product-input-list.component';

describe('ProductInputListComponent', () => {
  let component: ProductInputListComponent;
  let fixture: ComponentFixture<ProductInputListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductInputListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductInputListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
