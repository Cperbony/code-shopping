import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpErrorResponse} from "@angular/common/http";
import {CategoryHttpService} from "../../../../services/http/category-http.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import fieldsOptions from "../category-form/category-fields-options";

@Component({
    selector: 'category-new-modal',
    templateUrl: './category-new-modal.component.html',
    styleUrls: ['./category-new-modal.component.css']
})
export class CategoryNewModalComponent implements OnInit {

    form: FormGroup;
    errors = {};

    @ViewChild(ModalComponent) modal: ModalComponent;

    @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
    @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

    constructor(public categoryHttp: CategoryHttpService, private formBuilder: FormBuilder) {
        const maxLength = fieldsOptions.name.validationMessage.maxlength;
        this.form = this.formBuilder.group( {
            name: ['', [Validators.required, Validators.maxLength(maxLength)]],
            active: true,
        });
    }

    ngOnInit() {
    }

    submit() {
        this.categoryHttp
            .create(this.form.value)
            .subscribe((category) => {
                this.form.reset({
                   name: '',
                   active: true
                });
                this.onSuccess.emit(category);
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
        // setTimeout(() => {this.modal.hide();}, 30000)
    }

    showErrors(){
        return Object.keys(this.errors).length != 0;
    }

    hideModal($event: Event) {
        console.log($event);
    }

}
