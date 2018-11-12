import { Component } from '@angular/core';

/**
 * Generated class for the SelectCountriesCodeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'select-countries-code',
  templateUrl: 'select-countries-code.html'
})
export class SelectCountriesCodeComponent {

  text: string;

  constructor() {
    console.log('Hello SelectCountriesCodeComponent Component');
    this.text = 'Hello World';
  }

}
