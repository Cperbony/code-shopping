import {Injectable} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import {NotifyMessageService} from "../../../../services/notify-message.service";
import {ProductInputListComponent} from "./product-input-list.component";

@Injectable({
    providedIn: 'root'
})

export class ProductInputInsertService {

    private _productInputListComponent: ProductInputListComponent;

    constructor(private notifyMessage: NotifyMessageService) {
    }

    set inputListComponent(value: ProductInputListComponent) {
        this._productInputListComponent = value;
    }

    showModalInsert() {
        this._productInputListComponent.productInputNewModal.showModal();
    }

    onInsertError($event: HttpErrorResponse) {
        this.notifyMessage.error('Não foi possível cadastrar a entrada de estoque.');
        console.log($event);
    }

    onInsertSuccess($event: any) {
        this.notifyMessage.success('Entrada de estoque cadastrada com sucesso!');
        console.log($event);
        this._productInputListComponent.getInputs();
    }
}