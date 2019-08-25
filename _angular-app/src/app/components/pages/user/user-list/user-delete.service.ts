import {Injectable} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import {NotifyMessageService} from "../../../../services/notify-message.service";
import {UserListComponent} from "./user-list.component";

@Injectable({
    providedIn: 'root'
})
export class UserDeleteService {

    private _userListComponent: UserListComponent;

    constructor(private notifyMessage: NotifyMessageService) {
    }

    set userListComponent(value: UserListComponent) {
        this._userListComponent = value;
    }

    showModalDelete(userId: number) {
        this._userListComponent.userId = userId;
        this._userListComponent.userDeleteModal.showModal();
    }

    onDeleteSuccess($event: any) {
        this.notifyMessage.success('Usuário removido com sucesso!');
        console.log($event);
        this._userListComponent.getUsers();
    }

    onDeleteError($event: HttpErrorResponse) {
        this.notifyMessage.error('Não foi possível excluir o usuário.');
        console.log($event);
    }
}