import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category, ProductCategory} from "../../../../models";
import {CategoryHttpService} from "../../../../services/http/category-http.service";
import {ProductCategoryHttpService} from "../../../../services/http/product-category-http.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
    selector: 'product-category-new',
    templateUrl: './product-category-new.component.html',
    styleUrls: ['./product-category-new.component.css']
})
export class ProductCategoryNewComponent implements OnInit {

    categories: Category[] = [];
    categoriesId: number[] = [];

    @Input()
    productId: number;
    @Input()
    productCategory: ProductCategory = null;

    @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
    @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

    constructor(private categoryHttp: CategoryHttpService,
                private productCategoryHttp: ProductCategoryHttpService) {
    }

    ngOnInit() {
        this.getCategories();
    }

    getCategories() {
        this.categoryHttp.list({all: 1})
            .subscribe(response => {
                this.categories = response.data;
            })
    }

    submit() {
        const categoriesId = this.mergeCategories();
        this.productCategoryHttp
            .create(this.productId, categoriesId)
            .subscribe(
                productCategory => this.onSuccess.emit(productCategory),
                    error => this.onError.emit(error));
        return false;
    }

    private mergeCategories(): number[] {
        const categoriesId = this.productCategory.categories.map((category) => category.id);
        const newCategoriesId = this.categoriesId.filter(category => {
            return categoriesId.indexOf(category) == -1;
        });
        return categoriesId.concat(newCategoriesId);
    }
}
