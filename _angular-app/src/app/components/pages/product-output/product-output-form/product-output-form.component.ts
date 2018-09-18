import {ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Select2Component} from "ng2-select2";
import {FormGroup} from "@angular/forms";
import {ProductIdFieldService} from "./product-id-field.service";
import productOutputFieldsOptions from "./product-output-fields-options";

@Component({
  selector: 'product-output-form',
  templateUrl: './product-output-form.component.html',
  styleUrls: ['./product-output-form.component.css']
})
export class ProductOutputFormComponent implements OnInit {

  @Input()
    public form: FormGroup;
    @ViewChild(Select2Component, {read: ElementRef})
    select2Element: ElementRef;

    constructor(
        private changeRef: ChangeDetectorRef,
        public productIdField: ProductIdFieldService
    ) {
    }

    ngOnInit() {
        this.productIdField.make(this.select2Element, this.form.get('product_id'));
    }

    ngOnChanges() {
        this.changeRef.detectChanges();
    }

    get fieldsOptions(): any {
        return productOutputFieldsOptions;
    }

    get product_id(){
      return this.fieldsOptions.product_id;
    }

    get amount(){
      return this.fieldsOptions.amount;
    }
}
