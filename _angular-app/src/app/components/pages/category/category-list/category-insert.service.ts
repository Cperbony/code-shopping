import {Injectable} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import {NotifyMessageService} from "../../../../services/notify-message.service";
import {CategoryListComponent} from "./category-list.component";

@Injectable({
    providedIn: 'root'
})
export class CategoryInsertService {

    private _categoryListComponent: CategoryListComponent;

    constructor(private notifyMessage: NotifyMessageService) {

    }

    set categoryListComponent(value: CategoryListComponent) {
        this._categoryListComponent = value;
    }


    showModalInsert() {
        this._categoryListComponent.categoryNewModal.showModal();
    }

    onInsertSuccess($event: any) {
        this.notifyMessage.success('Categoria cadastrada com sucesso!');
        console.log($event);
        this._categoryListComponent.getCategories();
    }

    onInsertError($event: HttpErrorResponse) {
        this.notifyMessage.error(`Não foi possível inserir a categoria.`);
        console.log($event);
    }
}