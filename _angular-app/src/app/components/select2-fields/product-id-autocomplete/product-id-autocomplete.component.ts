import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Select2FieldsService} from "../select2-fields.service";
import {AbstractControl} from "@angular/forms";
import {Select2Component} from "ng2-select2";
import {environment} from "../../../../environments/environment";

@Component({
    selector: 'product-id-autocomplete',
    templateUrl: './product-id-autocomplete.component.html',
    styleUrls: ['./product-id-autocomplete.component.css']
})
export class ProductIdAutocompleteComponent implements OnInit {

    @Input()
    productIdFormControl: AbstractControl;

    @ViewChild(Select2Component, {read: ElementRef})
    select2Element: ElementRef;

    constructor(public select2Service: Select2FieldsService) {
    }

    ngOnInit() {
        const url = `${environment.api.url}/products`;
        this.select2Service.make(url, this.select2Element, this.productIdFormControl);
    }

}
