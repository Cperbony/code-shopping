import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpErrorResponse} from "@angular/common/http";
import {ProductOutputHttpService} from "../../../../services/http/product-output-http.service";
import productOutputFieldsOptions from "../product-output-form/product-output-fields-options";

@Component({
  selector: 'product-output-new-modal',
  templateUrl: './product-output-new-modal.component.html',
  styleUrls: ['./product-output-new-modal.component.css']
})
export class ProductOutputNewModalComponent implements OnInit {

    form: FormGroup;
    errors = {};

    @ViewChild(ModalComponent)
    modal: ModalComponent;

    @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
    @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

    constructor(private productOutputHttp: ProductOutputHttpService,
                private formBuilder: FormBuilder) {
        this.form = this.formBuilder.group( {
            product_id: [null, [Validators.required]],
            amount: ['', [Validators.required, Validators.min(productOutputFieldsOptions.amount.validationMessage.min)]],
        });
    }

    ngOnInit() {
    }

    submit() {
        this.productOutputHttp
            .create(this.form.value)
            .subscribe(productOutput => {
                this.modal.hide();
                this.onSuccess.emit(productOutput);
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
