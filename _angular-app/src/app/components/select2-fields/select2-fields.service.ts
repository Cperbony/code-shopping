import {ElementRef, Injectable} from "@angular/core";
import {AbstractControl} from "@angular/forms";
import {AuthService} from "../../services/auth.service";

declare const $;

@Injectable({
    providedIn: 'root'
})

export class Select2FieldsService {
    data;
    options: Select2Options;
    select2Element: ElementRef;
    formControl: AbstractControl;

    constructor(private authService: AuthService) {
    }

    get select2Native(): HTMLElement {
        return this.select2Element.nativeElement;
    }

    make(autoCompleteUrl: string, select2Element: ElementRef, formControl: AbstractControl) {
        this.select2Element = select2Element;
        this.formControl = formControl;
        this.setResetData();
        this.setOptions(autoCompleteUrl);
        this.onClosingDropdown();
        this.resetSelect2OnSetNull();
    }

    private setResetData() {
        this.data = null;
        setTimeout(() => {
            this.data = [];
        }, 300);
    }

    private setOptionsParent() {
        const modalElement = this.select2Native.closest('.select2-parent');
        if (!modalElement) {
            alert('.select2-parent not found');
            return;
        }
        return this.options.dropdownParent = $(modalElement.firstChild);
    }

    private setOptions(autoCompleteUrl: string) {
        const options = {
            minimumInputLength: 1,
            theme: 'bootstrap4',
            ajax: {
                url: autoCompleteUrl,
                transport: (params, success, failure) => {
                    const headers = {
                        'Accept': 'application/json',
                        'Authorization': this.authService.authorizationHeader
                    };
                    return $.ajax({
                        headers: headers,
                        url: params.url,
                        data: params.data,
                        dataType: params.dataType,
                        success: success,
                        failure: failure
                    });
                },
                data(params) {
                    return {
                        search: params.term,
                        all: 1
                    }
                },
                processResults(data){
                    return{
                        results: data.data.map((responseData) => {
                            return {id: responseData.id, text: responseData.name};
                        })
                    }
                }
            }
        };
        this.options = {...options, ...this.options};
        this.setOptionsParent();
    }

    private getJQueryElement() {
        return $(this.select2Native);
    }

    private resetSelect2OnSetNull() {
        this.formControl.valueChanges.subscribe((value) => {
            if (!value) {
                const selectField = this.getJQueryElement().find('select');
                selectField.val(null).trigger('change');
            }
        });
    }

    private onClosingDropdown() {
        this.getJQueryElement().on('select2:closing', (e: Event) => {
            const element: HTMLInputElement = (<any>e.target);
            this.formControl.markAsTouched();
            this.formControl.setValue(element.value);
        });
    }

    updateFormControl(value) {
        this.formControl.setValue(value);
    }

}