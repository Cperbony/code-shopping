import {Component, Input} from '@angular/core';

/**
 * Generated class for the ChatContentRightComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'chat-content-right',
  templateUrl: 'chat-content-right.html'
})
export class ChatContentRightComponent {

    @Input()
    message;

  constructor() {
  }

}
