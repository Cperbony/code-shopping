import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Component({
    selector: 'category-edit-modal',
    templateUrl: './category-edit-modal.component.html',
    styleUrls: ['./category-edit-modal.component.css']
})
export class CategoryEditModalComponent implements OnInit {

    category = {
        name: '',
        active: true
    };

    _categoryId: number;

    @ViewChild(ModalComponent) modal: ModalComponent;
    @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
    @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();


    constructor(private http: HttpClient) {
    }

    ngOnInit() {
    }

    getToken() {
        const token = window.localStorage.getItem('token');
        return token;
    }

    @Input()
    set categoryId(value) {
        this._categoryId = value;
        if (this._categoryId) {
            const token = window.localStorage.getItem('token');
            this.http.get<{ data: any }>(`http://localhost:8000/api/categories/${value}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .subscribe((response) => this.category = response.data)
        }
    }

    submit() {
        this.http
            .put(`http://localhost:8000/api/categories/${this._categoryId}`, this.category, {
                headers: {
                    'Authorization': `Bearer ${this.getToken()}`
                }
            })
            .subscribe((category) => {
                this.onSuccess.emit(category);
                this.modal.hide();
            }, error => this.onError.emit(error));
    }

    showModal() {
        this.modal.show();
        // setTimeout(() => {this.modal.hide();}, 30000)
    }

    hideModal($event: Event) {
        console.log($event);
    }

}
