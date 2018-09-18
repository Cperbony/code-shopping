import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductInput} from "../../../../models";
import {ProductInputHttpService} from "../../../../services/http/product-input-http.service";
import {ProductInputInsertService} from "./product-input-insert.service";
import {ProductInputNewModalComponent} from "../product-input-new-modal/product-input-new-modal.component";
import {FieldsPagination} from "../../../../common/fields-pagination";
import {FieldsSortColumn} from "../../../../common/fields-sort-column";
import {NotifyMessageService} from "../../../../services/notify-message.service";

@Component({
    selector: 'product-input-list',
    templateUrl: './product-input-list.component.html',
    styleUrls: ['./product-input-list.component.css']
})
export class ProductInputListComponent implements OnInit {

    inputs: Array<ProductInput> = [];
    searchText: string;

    pagination: FieldsPagination = {
        page: 1,
        totalItems: 0,
        ItemsPerPage: 15
    };

    sortColumn: FieldsSortColumn = {
        column: 'created_at',
        sort: 'desc'
    };

    @ViewChild(ProductInputNewModalComponent)
    productInputNewModal: ProductInputNewModalComponent;

    // @ViewChild(ProductInputInsertService)
    // productInputInsertService: ProductInputInsertService;

    constructor(private notifyMessage: NotifyMessageService,
                private productInputHttp: ProductInputHttpService,
                public inputInsertService: ProductInputInsertService) {
        this.inputInsertService.inputListComponent = this;
    }

    ngOnInit() {
        this.getInputs();
    }

    getInputs() {
        this.productInputHttp.list({
            page: this.pagination.page,
            sort: this.sortColumn.column === '' ? null : this.sortColumn,
            search: this.searchText
        })
            .subscribe(response => {
                this.inputs = response.data;
                this.pagination.totalItems = response.meta.total;
                this.pagination.ItemsPerPage = response.meta.per_page;
            })
    }

    pageChanged(page) {
        this.pagination.page = page;
        this.getInputs();
    }

    sort($event) {
        this.getInputs();
    }

    search(search) {
        this.searchText = search;
        this.getInputs();
    }
}
