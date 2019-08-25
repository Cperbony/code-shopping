import {Component, EventEmitter, Input, Output} from '@angular/core';

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

    _countryCode = "55";
    @Output()
    countryCodeChange: EventEmitter<any> = new EventEmitter<any>();

    constructor() {
    }

    @Input()
    set countryCode(value) {
        this._countryCode = value;
        this.countryCodeChange.emit(value);
    }

    get countryCode() {
        return this._countryCode;
    }
}
