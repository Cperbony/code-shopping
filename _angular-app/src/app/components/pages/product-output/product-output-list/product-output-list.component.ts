import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductOutputNewModalComponent} from "../product-output-new-modal/product-output-new-modal.component";
import {ProductOutputInsertService} from "./product-output-insert.service";
import {ProductOutputHttpService} from "../../../../services/http/product-output-http.service";
import {FieldsSortColumn} from "../../../../common/fields-sort-column";
import {NotifyMessageService} from "../../../../services/notify-message.service";
import {FieldsPagination} from "../../../../common/fields-pagination";
import {ProductOutput} from "../../../../models";

@Component({
  selector: 'product-output-list',
  templateUrl: './product-output-list.component.html',
  styleUrls: ['./product-output-list.component.css']
})
export class ProductOutputListComponent implements OnInit {

    outputs: Array<ProductOutput> = [];
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

    @ViewChild(ProductOutputNewModalComponent)
    productOutputNewModal: ProductOutputNewModalComponent;

    // @ViewChild(ProductOutputInsertService)
    // productInputInsertService: ProductOutputInsertService;

    constructor(private notifyMessage: NotifyMessageService,
                private productOutputHttp: ProductOutputHttpService,
                public outputInsertService: ProductOutputInsertService) {
        this.outputInsertService.outputListComponent = this;
    }

    ngOnInit() {
        this.getOutputs();
    }

    getOutputs() {
        this.productOutputHttp.list({
            page: this.pagination.page,
            sort: this.sortColumn.column === '' ? null : this.sortColumn,
            search: this.searchText
        })
            .subscribe(response => {
                this.outputs = response.data;
                this.pagination.totalItems = response.meta.total;
                this.pagination.ItemsPerPage = response.meta.per_page;
            })
    }

    pageChanged(page) {
        this.pagination.page = page;
        this.getOutputs();
    }

    sort($event) {
        this.getOutputs();
    }

    search(search) {
        this.searchText = search;
        this.getOutputs();
    }
}
