import {Component, OnInit, ViewChild} from '@angular/core';
import {ChatGroup} from "../../../../models";
import {ChatGroupNewModalComponent} from "../chat-group-new-modal/chat-group-new-modal.component";
import {ChatGroupEditModalComponent} from "../chat-group-edit-modal/chat-group-edit-modal.component";
import {ChatGroupDeleteModalComponent} from "../chat-group-delete-modal/chat-group-delete-modal.component";
import {ChatGroupHttpService} from "../../../../services/http/chat-group-http.service";
import {ChatGroupInsertService} from "./chat-group-insert.service";
import {ChatGroupEditService} from "./chat-group-edit.service";
import {ChatGroupDeleteService} from "./chat-group-delete.service";
import {FieldsSortColumn} from "../../../../common/fields-sort-column";
import {NotifyMessageService} from "../../../../services/notify-message.service";
import {FieldsPagination} from "../../../../common/fields-pagination";

@Component({
    selector: 'chat-group-list',
    templateUrl: './chat-group-list.component.html',
    styleUrls: ['./chat-group-list.component.css']
})
export class ChatGroupListComponent implements OnInit {

    chatGroups: Array<ChatGroup> = [];
    chatGroupId: number;
    searchText: string;

    pagination: FieldsPagination = {
        page: 1,
        totalItems: 0,
        itemsPerPage: 10
    };

    sortColumn: FieldsSortColumn = {
        column: 'created_at',
        sort: 'desc'
    };

    @ViewChild(ChatGroupNewModalComponent)
    chatGroupNewModal: ChatGroupNewModalComponent;

    @ViewChild(ChatGroupEditModalComponent)
    chatGroupEditModal: ChatGroupEditModalComponent;

    @ViewChild(ChatGroupDeleteModalComponent)
    chatGroupDeleteModal: ChatGroupDeleteModalComponent;

    constructor(private notifyMessage: NotifyMessageService,
                private chatGroupHttp: ChatGroupHttpService,
                protected chatGroupInsertService: ChatGroupInsertService,
                protected chatGroupEditService: ChatGroupEditService,
                protected chatGroupDeleteService: ChatGroupDeleteService) {
        this.chatGroupInsertService.chatGroupListComponent = this;
        this.chatGroupEditService.chatGroupListComponent = this;
        this.chatGroupDeleteService.chatGroupListComponent = this;
    }

    ngOnInit() {
        this.getChatGroups();
    }

    getChatGroups() {
        const searchParams = {
            page: this.pagination.page,
            sort: this.sortColumn.column === '' ? null : this.sortColumn,
            search: this.searchText
        };
        this.chatGroupHttp.list(searchParams)
            .subscribe(response => {
                this.chatGroups = response.data;
                this.pagination.totalItems = response.meta.total;
                this.pagination.itemsPerPage = response.meta.per_page;
            });
        this.chatGroupId = 0;
    }

    pageChanged(page) {
        this.pagination.page = page;
        this.getChatGroups();
    }

    onSort($event) {
        this.getChatGroups();
    }

    search(search) {
        this.searchText = search;
        this.getChatGroups();
    }

}
