import { NgModule } from '@angular/core';
import { FirebasePhoneNumberCheckComponent } from './firebase-phone-number-check/firebase-phone-number-check';
import { SelectCountriesCodeComponent } from './select-countries-code/select-countries-code';
@NgModule({
	declarations: [FirebasePhoneNumberCheckComponent,
    SelectCountriesCodeComponent],
	imports: [],
	exports: [FirebasePhoneNumberCheckComponent,
    SelectCountriesCodeComponent]
})
export class ComponentsModule {}
