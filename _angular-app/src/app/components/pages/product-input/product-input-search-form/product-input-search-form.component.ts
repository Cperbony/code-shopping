import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'product-input-search-form',
    templateUrl: './product-input-search-form.component.html',
    styleUrls: ['./product-input-search-form.component.css']
})
export class ProductInputSearchFormComponent implements OnInit {

    search = '';

    @Output()
    onSearch: EventEmitter<string> = new EventEmitter<string>();

    constructor() {
    }

    ngOnInit() {
    }

    submit() {
        this.onSearch.emit(this.search);
        return false;
    }

    clear() {
        this.search = '';
        this.submit();
    }
}
