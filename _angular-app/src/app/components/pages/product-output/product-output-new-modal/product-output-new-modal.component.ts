import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpErrorResponse} from "@angular/common/http";
import productInputFfieldsOptions from "../../product-input/product-input-form/product-input-fields-options";
import {ProductOutputHttpService} from "../../../../services/http/product-output-http.service";

@Component({
  selector: 'product-output-new-modal',
  templateUrl: './product-output-new-modal.component.html',
  styleUrls: ['./product-output-new-modal.component.css']
})
export class ProductOutputNewModalComponent implements OnInit {

    form: FormGroup;
    errors = {};

    @ViewChild(ModalComponent) modal: ModalComponent;

    @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
    @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

    constructor(public outputHttp: ProductOutputHttpService,
                private formBuilder: FormBuilder) {
        this.form = this.formBuilder.group( {
            product_id: [null, [Validators.required]],
            amount: ['', [Validators.required, Validators.min(productInputFfieldsOptions.amount.validationMessage.min)]],
        });
    }

    ngOnInit() {
    }

    submit() {
        this.outputHttp
            .create(this.form.value)
            .subscribe((input) => {
                this.form.reset({
                    amount: '',
                    product_id: null
                });
                this.onSuccess.emit(input);
                this.modal.hide();
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
}
