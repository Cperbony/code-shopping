import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductIdAutocompleteComponent } from './product-id-autocomplete.component';

describe('ProductIdAutocompleteComponent', () => {
  let component: ProductIdAutocompleteComponent;
  let fixture: ComponentFixture<ProductIdAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductIdAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductIdAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
