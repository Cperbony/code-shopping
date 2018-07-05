import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {CategoryNewModalComponent} from '../category-new-modal/category-new-modal.component';
import {CategoryEditModalComponent} from "../category-edit-modal/category-edit-modal.component";

@Component({
    selector: 'app-category-list',
    templateUrl: './category-list.component.html',
    styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

    categories: Array<{ id: number, name: string, active: boolean, created_at: { date: string } }> = [];

    @ViewChild(CategoryNewModalComponent)
    categoryNewModal: CategoryNewModalComponent;

    @ViewChild(CategoryEditModalComponent)
    categoryEditModal: CategoryEditModalComponent;

    categoryId: number;

    constructor(private http: HttpClient) {
        // console.log('constructor');
    }

    ngOnInit() {
        // console.log('ngOnInit');
        this.getCategories();
    }

    getCategories() {
        // const token = window.localStorage.getItem('token');
        this.http
            .get<{ data: Array<{ id: number, name: string, active: boolean, created_at: { date: string } }> }>
            ('http://localhost:8000/api/categories', {
                headers: {
                    'Authorization': `Bearer ${this.getToken()}`
                }
            })
            .subscribe(response => {
                this.categories = response.data
            });
    }

    getToken() {
        const token = window.localStorage.getItem('token');
        return token;
    }

    showModalInsert() {
        this.categoryNewModal.showModal();
    }

    showModalEdit(categoryId: number){
        this.categoryId = categoryId;
        this.categoryEditModal.showModal();
    }

    onInsertSuccess($event: any) {
        console.log($event);
        this.getCategories();
    }

    onInsertError($event: HttpErrorResponse) {
        console.log(event);
    }

    onEditSuccess($event: any) {
        console.log($event);
        this.getCategories();
    }

    onEditError($event: HttpErrorResponse) {
        console.log(event);
    }
}
