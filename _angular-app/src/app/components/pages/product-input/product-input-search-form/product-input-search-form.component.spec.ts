import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInputSearchFormComponent } from './product-input-search-form.component';

describe('ProductInputSearchFormComponent', () => {
  let component: ProductInputSearchFormComponent;
  let fixture: ComponentFixture<ProductInputSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductInputSearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductInputSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
