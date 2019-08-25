import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductInputHttpService} from "../../../../services/http/product-input-http.service";
import {default as productInputFieldsOptions} from "../product-input-form/product-input-fields-options";

@Component({
  selector: 'product-input-new-modal',
  templateUrl: './product-input-new-modal.component.html',
  styleUrls: ['./product-input-new-modal.component.css']
})
export class ProductInputNewModalComponent implements OnInit {

    form: FormGroup;
    errors = {};

    @ViewChild(ModalComponent)
    modal: ModalComponent;

    @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
    @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

    constructor(private productInputHttp: ProductInputHttpService,
                private formBuilder: FormBuilder) {
        this.form = this.formBuilder.group( {
            product_id: [null, [Validators.required]],
            amount: ['', [Validators.required, Validators.min(productInputFieldsOptions.amount.validationMessage.min)]],
        });
    }

    ngOnInit() {
    }

    submit() {
        this.productInputHttp
            .create(this.form.value)
            .subscribe(productInput => {
                this.modal.hide();
                this.onSuccess.emit(productInput);
                this.form.reset();
                this.errors = {};
            }, responseError => {
                if(responseError.status === 422 ){
                    this.errors = responseError.error.errors;
                }
                this.onError.emit(responseError)
            });
    }

    showModal() {
        this.modal.show();
    }

    hideModal($event: Event) {
        console.log($event);
    }

    showErrors(){
        return Object.keys(this.errors).length != 0;
    }

}
