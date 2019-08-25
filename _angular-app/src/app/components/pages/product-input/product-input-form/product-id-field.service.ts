import {ElementRef, Injectable} from "@angular/core";
import {AuthService} from "../../../../services/auth.service";
import {environment} from "../../../../../environments/environment";
import {AbstractControl} from "@angular/forms";

@Injectable({
    providedIn: 'root'
})

export class ProductIdFieldService {

    data;
    options: Select2Options;
    select2Element: ElementRef;
    formControl: AbstractControl;

    constructor(private authService: AuthService) {
    }

    get divModal() {
        const modalElement = this.select2Native.closest('modal');
        return modalElement.firstChild;
    }

    get select2Native(): HTMLElement {
        return this.select2Element.nativeElement;
    }

    make(autoCompleteUrl: string, select2Element: ElementRef, formControl: AbstractControl) {
        this.select2Element = select2Element;
        this.formControl = formControl;
        this.setResetData();
        this.setOptions(autoCompleteUrl);
        // this.options = {
        //     minimumInputLength: 1,
        //     dropdownParent: $(this.divModal),
        //     theme: 'bootstrap4',
        //     ajax: {
        //         headers: {
        //             'Accept': 'application/json',
        //             'Authorization': this.authService.authorizationHeader
        //         },
        //         url: `${environment.api.url}/inputs`,
        //         data(params) {
        //             return {
        //                 search: params.term
        //             }
        //         },
        //         processResults(data) {
        //             return {
        //                 results: data.data.map((product) => {
        //                     return {id: product.id, text: product.name}
        //                 })
        //             }
        //         }
        //     }
        // };
        // this.data = [];
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
        this.options.dropdownParent = $(modalElement.firstChild);
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
                        success: success
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
        this.options = {...options, ...this.options}
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
