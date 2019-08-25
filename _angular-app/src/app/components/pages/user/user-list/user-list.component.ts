import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from "../../../../models";
import {UserNewModalComponent} from "../user-new-modal/user-new-modal.component";
import {UserEditModalComponent} from "../user-edit-modal/user-edit-modal.component";
import {UserDeleteModalComponent} from "../user-delete-modal/user-delete-modal.component";
import {UserHttpService} from "../../../../services/http/user-http.service";
import {UserInsertService} from "./user-insert.service";
import {UserEditService} from "./user-edit.service";
import {UserDeleteService} from "./user-delete.service";
import {FieldsPagination} from "../../../../common/fields-pagination";
import {FieldsSortColumn} from "../../../../common/fields-sort-column";

@Component({
    selector: 'user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

    users: Array<User> = [];
    userId: number;
    searchText: string;

    pagination: FieldsPagination = {
        page: 1,
        totalItems: 0,
        itemsPerPage: 15
    };

    sortColumn: FieldsSortColumn = {
        column: 'created_at',
        sort: 'desc'
    };

    @ViewChild(UserNewModalComponent)
    userNewModal: UserNewModalComponent;

    @ViewChild(UserEditModalComponent)
    userEditModal: UserEditModalComponent;

    @ViewChild(UserDeleteModalComponent)
    userDeleteModal: UserDeleteModalComponent;

    constructor(private userHttp: UserHttpService,
                protected userInsertService: UserInsertService,
                protected userEditService: UserEditService,
                protected userDeleteService: UserDeleteService) {
        this.userInsertService.userListComponent = this;
        this.userEditService.userListComponent = this;
        this.userDeleteService.userListComponent = this;
    }

    ngOnInit() {
        this.getUsers();
    }

    getUsers() {
        const searchParams = {
            page: this.pagination.page,
            sort: this.sortColumn.column === '' ? null : this.sortColumn,
            search: this.searchText
        };
        this.userHttp.list(searchParams)
            .subscribe(response => {
                this.users = response.data;
                this.pagination.totalItems = response.meta.total;
                this.pagination.itemsPerPage = response.meta.per_page;
            });
        this.userId = 0;
    }

    onSort($event) {
        this.getUsers();
    }

    pageChanged(page) {
        this.pagination.page = page;
        this.getUsers();
    }

    search(search) {
        this.searchText = search;
    }

}
