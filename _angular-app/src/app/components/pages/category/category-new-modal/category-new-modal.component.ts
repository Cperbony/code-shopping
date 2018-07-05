import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Component({
    selector: 'category-new-modal',
    templateUrl: './category-new-modal.component.html',
    styleUrls: ['./category-new-modal.component.css']
})
export class CategoryNewModalComponent implements OnInit {

    category = {
        name: '',
        active: true
    };

    @ViewChild(ModalComponent) modal: ModalComponent;

    @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
    @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
    }

    submit() {
        this.http
            .post('http://localhost:8000/api/categories', this.category, {
                headers: {
                    'Authorization': `Bearer ${this.getToken()}`
                }
            })
            .subscribe((category) => {
                this.onSuccess.emit(category);
                this.modal.hide();
            }, error => this.onError.emit(error));
    }

    getToken() {
        const token = window.localStorage.getItem('token');
        return token;
    }


    showModal() {
        this.modal.show();
        // setTimeout(() => {this.modal.hide();}, 30000)
    }

    hideModal($event: Event) {
        console.log($event);
    }

}
