import {ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {default as productInputFieldsOptions} from "./product-input-fields-options";
import {ProductIdFieldService} from "./product-id-field.service";
import {Select2Component} from "ng2-select2";
import {environment} from "../../../../../environments/environment";

@Component({
    selector: 'product-input-form',
    templateUrl: './product-input-form.component.html',
    styleUrls: ['./product-input-form.component.css']
})
export class ProductInputFormComponent implements OnInit {

    @Input()
    form: FormGroup;

    @ViewChild(Select2Component, {read: ElementRef})
    select2Element: ElementRef;

    constructor(
        // private changeRef: ChangeDetectorRef,
        //         public productIdField: ProductIdFieldService
    ) {}

    ngOnInit() {
        // const url = `${environment.api.url}/inputs`;
        // this.productIdField.make(url, this.select2Element, this.form.get('amount'));
    }

    // ngOnChanges() {
    //     this.changeRef.detectChanges();
    // }

    get fieldsOptions(): any {
        return productInputFieldsOptions;
    }

    get productId() {
        return this.fieldsOptions.product_id;
    }

    get amount(){
        return this.fieldsOptions.amount;
    }

}
