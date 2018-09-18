import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'product-output-search',
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
}
