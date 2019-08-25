import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOutputSearchComponent } from './product-output-search.component';

describe('ProductOutputSearchComponent', () => {
  let component: ProductOutputSearchComponent;
  let fixture: ComponentFixture<ProductOutputSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductOutputSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductOutputSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
