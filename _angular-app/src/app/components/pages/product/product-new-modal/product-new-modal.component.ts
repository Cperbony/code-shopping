import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {Product} from "../../../../models";
import {ProductHttpService} from "../../../../services/http/product-http.service";

@Component({
    selector: 'product-new-modal',
    templateUrl: './product-new-modal.component.html',
    styleUrls: ['./product-new-modal.component.css']
})
export class ProductNewModalComponent implements OnInit {

    product: Product = {
        name: '',
        description: '',
        price: 0,
        active: true
    };

    @ViewChild(ModalComponent) modal: ModalComponent;

    @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
    @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

    constructor(public productHttp: ProductHttpService) {
    }

    ngOnInit() {
    }

    submit() {
        this.productHttp
            .create(this.product)
            .subscribe((product) => {
                this.onSuccess.emit(product);
                this.modal.hide();
            }, error => this.onError.emit(error));
    }

    showModal() {
        this.modal.show();
        // setTimeout(() => {this.modal.hide();}, 30000)
    }

    hideModal($event: Event) {
        console.log($event);
    }
}
