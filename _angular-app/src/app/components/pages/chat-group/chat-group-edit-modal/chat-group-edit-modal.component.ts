import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {ChatGroup} from "../../../../models";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ChatGroupHttpService} from "../../../../services/http/chat-group-http.service";
import chatGroupFieldsOptions from "../chat-group-form/chat-group-fields-options";

@Component({
    selector: 'chat-group-edit-modal',
    templateUrl: './chat-group-edit-modal.component.html',
    styleUrls: ['./chat-group-edit-modal.component.css']
})
export class ChatGroupEditModalComponent implements OnInit {

    _chatGroupId: number;
    chatGroup: ChatGroup;
    form: FormGroup;
    errors = {};

    @ViewChild(ModalComponent) modal: ModalComponent;
    @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
    @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

    constructor(private chatGroupHttp: ChatGroupHttpService,
                private formBuilder: FormBuilder) {
        const maxLength = chatGroupFieldsOptions.name.validationMessage.maxlength;
        this.form = this.formBuilder.group({
            name: ['',
                [Validators.required, Validators.maxLength(maxLength)]],
            photo: null
        });
    }

    ngOnInit() {
    }

    @Input()
    set chatGroupId(value) {
        if (!value) return;

        this._chatGroupId = value;

        if (this._chatGroupId) {
            this.chatGroupHttp
                .get(this._chatGroupId)
                .subscribe(
                    chatGroup => {
                        this.chatGroup = chatGroup;
                        this.form.patchValue(chatGroup)
                    },
                    responseError => {
                        if (responseError.status == 401) {
                            this.modal.hide()
                        }
                    }
                )
        }
    }

    submit() {
        this.chatGroupHttp
            .update(this._chatGroupId, this.form.value)
            .subscribe((chatGroup) => {
                this.modal.hide();
                this.onSuccess.emit(chatGroup);
                this.form.reset();
                this.errors = {};
            }, responseError => {
                if (responseError.status === 422) {
                    this.errors = responseError.error.errors;
                }
                this.onError.emit(responseError)
            });
    }

    showModal() {
        this.form.get('photo').setValue(null);
        this.modal.show();
    }

    hideModal($event: Event) {
        console.log($event);
    }

}
