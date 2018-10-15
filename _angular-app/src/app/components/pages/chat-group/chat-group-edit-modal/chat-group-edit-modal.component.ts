import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {ChatGroup} from "../../../../models";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ChatGroupHttpService} from "../../../../services/http/chat-group-http.service";
import fieldsOptions from "../chat-group-form/chat-group-fields-options";

@Component({
    selector: 'chat-group-edit-modal',
    templateUrl: './chat-group-edit-modal.component.html',
    styleUrls: ['./chat-group-edit-modal.component.css']
})
export class ChatGroupEditModalComponent implements OnInit {

    _chatGroupId: number;
    chatGroup: ChatGroup;
    form: FormGroup;

    @ViewChild(ModalComponent) modal: ModalComponent;
    @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
    @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

    constructor(private chatGroupHttp: ChatGroupHttpService,
                private formBuilder: FormBuilder) {
        const maxLength = fieldsOptions.name.validationMessage.maxlength;
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
                this.onSuccess.emit(chatGroup);
                this.modal.hide();
            }, error => this.onError.emit(error));
    }

    showModal() {
        this.modal.show();
    }

    hideModal($event: Event) {
        console.log($event);
    }

}
