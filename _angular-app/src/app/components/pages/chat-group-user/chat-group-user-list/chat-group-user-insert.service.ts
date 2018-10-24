import {Injectable} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import {NotifyMessageService} from "../../../../services/notify-message.service";
import {ChatGroupUserListComponent} from "./chat-group-user-list.component";

@Injectable({
    providedIn: 'root'
})
export class ChatGroupUserInsertService {

    private _chatGroupUserListComponent: ChatGroupUserListComponent;

    constructor(private notifyMessage: NotifyMessageService) {
    }

    set chatGroupListComponent(value: ChatGroupUserListComponent) {
        this._chatGroupUserListComponent = value;
    }

    onInsertSuccess($event: any) {
        this.notifyMessage.success('Membros cadastrados com sucesso!');
        console.log($event);
        this._chatGroupUserListComponent.getUsers();
    }

    onInsertError($event: HttpErrorResponse) {
        this.notifyMessage.error('Não foi possível adicionar os novos membros ao Grupo!');
        console.log($event);
    }
}