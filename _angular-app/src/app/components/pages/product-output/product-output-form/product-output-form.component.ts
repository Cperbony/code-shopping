import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Select2Component} from "ng2-select2";
import {FormGroup} from "@angular/forms";
import productOutputFieldsOptions from "./product-output-fields-options";

@Component({
  selector: 'product-output-form',
  templateUrl: './product-output-form.component.html',
  styleUrls: ['./product-output-form.component.css']
})
export class ProductOutputFormComponent implements OnInit {

    @Input()
    form: FormGroup;

    @ViewChild(Select2Component, {read: ElementRef})
    select2Element: ElementRef;

    constructor(
    ) {}

    ngOnInit() {
    }

    get fieldsOptions(): any {
        return productOutputFieldsOptions;
    }

    get productId() {
        return this.fieldsOptions.product_id;
    }

    get amount(){
        return this.fieldsOptions.amount;
    }
}
