import {Injectable} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import {NotifyMessageService} from "../../../../services/notify-message.service";
import {ProductOutputListComponent} from "./product-output-list.component";

@Injectable({
    providedIn: 'root'
})
export class ProductOutputInsertService {

    private _productOutputListComponent: ProductOutputListComponent;

    constructor(private notifyMessage: NotifyMessageService) {

    }

    set outputListComponent(value: ProductOutputListComponent) {
        this._productOutputListComponent = value;
    }

    showModalInsert() {
        this._productOutputListComponent.productOutputNewModal.showModal();
    }

    onInsertSuccess($event: any) {
        this.notifyMessage.success('Saída Efetuada com sucesso!');
        console.log($event);
        this._productOutputListComponent.getOutputs();
    }

    onInsertError($event: HttpErrorResponse) {
        this.notifyMessage.error('Não foi possível efetuar a saída do produto.');
        console.log($event);
    }
}