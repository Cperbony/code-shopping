import { Component } from '@angular/core';

/**
 * Generated class for the FirebasePhoneNumberCheckComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'firebase-phone-number-check',
  templateUrl: 'firebase-phone-number-check.html'
})
export class FirebasePhoneNumberCheckComponent {

  text: string;

  constructor() {
    console.log('Hello FirebasePhoneNumberCheckComponent Component');
    this.text = 'Hello World';
  }

}
