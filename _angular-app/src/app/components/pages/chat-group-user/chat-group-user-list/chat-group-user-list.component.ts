import {Component, OnInit, ViewChild} from '@angular/core';
import {ChatGroup, User} from "../../../../models";
import {ChatGroupUserHttpService} from "../../../../services/http/chat-group-user-http.service";
import {ActivatedRoute} from "@angular/router";
import {ChatGroupUserDeleteComponent} from "../chat-group-user-delete/chat-group-user-delete.component";


@Component({
    selector: 'chat-group-user-list',
    templateUrl: './chat-group-user-list.component.html',
    styleUrls: ['./chat-group-user-list.component.css']
})
export class ChatGroupUserListComponent implements OnInit {

    chatGroupId: number;
    chatGroup: ChatGroup;
    users: Array<User> = [];
    userId: number;
    userIdToDelete;

    pagination = {
        page: 1,
        totalItems: 0,
        itemsPerPage: 10
    };

    @ViewChild(ChatGroupUserDeleteComponent)
    chatGroupUserDeleteModal: ChatGroupUserDeleteComponent;

    constructor(private chatGroupUserHttp: ChatGroupUserHttpService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.chatGroupId = params.chat_group;
            this.getUsers();
        });
    }

    getUsers() {
        const searchParams = {
            page: this.pagination.page
        };
        this.chatGroupUserHttp.list(this.chatGroupId, searchParams)
            .subscribe(response => {
                this.chatGroup = response.data.chat_Group;
                this.users = response.data.users;
                this.pagination.totalItems = response.meta.total;
                this.pagination.itemsPerPage = response.meta.per_page;
            });
        this.userId = 0;
    }

    pageChanged(page) {
        this.pagination.page = page;
        this.getUsers();
    }

    onInsertSuccess($event) {
        console.log($event);
        this.getUsers();
    }

    onInsertError($event) {
        console.log($event);
    }

    openModalDelete(userId) {
        this.userIdToDelete = userId;
        this.chatGroupUserDeleteModal.showModal();
    }
}
