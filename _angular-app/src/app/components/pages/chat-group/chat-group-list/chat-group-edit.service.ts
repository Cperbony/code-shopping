import {Injectable} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import {NotifyMessageService} from "../../../../services/notify-message.service";
import {ChatGroupListComponent} from "./chat-group-list.component";

@Injectable({
    providedIn: 'root'
})
export class ChatGroupEditService{

    private _chatGroupListComponent: ChatGroupListComponent;

    constructor(private notifyMessage: NotifyMessageService){
    }

    set chatGroupListComponent(value: ChatGroupListComponent) {
        this._chatGroupListComponent = value;
    }

    showModalEdit(chatGroupId: number) {
        this._chatGroupListComponent.chatGroupId = chatGroupId;
        this._chatGroupListComponent.chatGroupEditModal.showModal();
    }

    onEditSuccess($event: any) {
        this.notifyMessage.success('Edição do grupo de chat efetuado com sucesso!');
        console.log($event);
        this._chatGroupListComponent.getChatGroups();
    }

    onEditError($event: HttpErrorResponse) {
        this.notifyMessage.error('Não foi possível efetuar a edição do grupo de chat');
        console.log($event);
    }

}