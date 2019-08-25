import {Injectable} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import {NotifyMessageService} from "../../../../services/notify-message.service";
import {ChatGroupUserListComponent} from "./chat-group-user-list.component";

@Injectable({
    providedIn: 'root'
})
export class ChatGroupUserDeleteService {

    private _chatGroupUserListComponent: ChatGroupUserListComponent;

    constructor(private notifyMessage: NotifyMessageService) {
    }

    set chatGroupListComponent(value: ChatGroupUserListComponent) {
        this._chatGroupUserListComponent = value;
    }

    showModalDelete(chatGroupId: number) {
        this._chatGroupUserListComponent.chatGroupId = chatGroupId;
        this._chatGroupUserListComponent.chatGroupUserDeleteModal.showModal();
    }

    onDeleteSuccess($event: any) {
        this.notifyMessage.success('Membros do Grupo removido com sucesso!');
        console.log($event);
        this._chatGroupUserListComponent.getUsers();
    }

    onDeleteError($event: HttpErrorResponse) {
        this.notifyMessage.error('Não foi possível excluir o Membro do Grupo');
        console.log($event);
    }
}