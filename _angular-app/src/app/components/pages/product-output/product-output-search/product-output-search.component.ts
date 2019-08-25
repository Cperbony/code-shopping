import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'product-output-search-form',
  templateUrl: './product-output-search.component.html',
  styleUrls: ['./product-output-search.component.css']
})
export class ProductOutputSearchComponent implements OnInit {

    search = "";

    @Output()
    onSearch: EventEmitter<string> = new EventEmitter<string>();

    constructor() { }

    ngOnInit() {
    }

    submit(){
        this.onSearch.emit(this.search);
        return false;
    }

    clear() {
        this.search = '';
        this.submit();
    }
}
