import {Component, Input} from '@angular/core';

/**
 * Generated class for the ChatContentDetailComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'chat-content-detail',
    templateUrl: 'chat-content-detail.html'
})
export class ChatContentDetailComponent {

    @Input()
    message;

    constructor() {
    }

}
