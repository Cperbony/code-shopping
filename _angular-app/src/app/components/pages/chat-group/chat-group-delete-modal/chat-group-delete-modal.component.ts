import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ChatGroupHttpService} from "../../../../services/http/chat-group-http.service";
import {ChatGroup} from "../../../../models";
import {HttpErrorResponse} from "@angular/common/http";
import {ModalComponent} from "../../../bootstrap/modal/modal.component";

@Component({
    selector: 'chat-group-delete-modal',
    templateUrl: './chat-group-delete-modal.component.html',
    styleUrls: ['./chat-group-delete-modal.component.css']
})

export class ChatGroupDeleteModalComponent implements OnInit {

    _chatGroupId: number;
    chatGroup: ChatGroup = null;
    errors = {};

    @ViewChild(ModalComponent) modal: ModalComponent;
    @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
    @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

    constructor(private chatGroupHttp: ChatGroupHttpService) {
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
                .subscribe(chatGroup => this.chatGroup = chatGroup)
        }
    }

    destroy() {
        this.chatGroupHttp
            .destroy(this._chatGroupId)
            .subscribe((chatGroup) => {
                this.onSuccess.emit(chatGroup);
                this.modal.hide();
                this.errors = {};
            }, responseError => {
                if (responseError.status === 422) {
                    this.errors = responseError.error.errors;
                }
                this.onError.emit(responseError);
            });
    }

    showModal() {
        this.modal.show();
    }

    hideModal($event: Event) {
        console.log($event);
    }
}
