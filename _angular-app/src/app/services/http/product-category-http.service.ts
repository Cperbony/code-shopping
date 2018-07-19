import {Injectable} from '@angular/core';
import {ProductCategory} from "../../models";
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs/internal/Observable';
import {map} from "rxjs/internal/operators";

@Injectable({
    providedIn: 'root'
})

export class ProductCategoryHttpService {

    private baseApi = 'http://localhost:8000/api';

    constructor(private http: HttpClient) {
    }

    list(productId: number): Observable<ProductCategory> {
        const token = window.localStorage.getItem('token');
        return this.http
            .get<{ data: ProductCategory }>
            (this.getBaseUrl(productId), {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .pipe(
                map(response => response.data)
            )
    }

    create(productId: number, categoriesId: number[]): Observable<ProductCategory> {
        const token = window.localStorage.getItem('token');
        return this.http
            .post<{ data: ProductCategory }>
            (this.getBaseUrl(productId), {categories: categoriesId}, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .pipe(
                map(response => response.data)
            )
    }

    private getBaseUrl(productId: number, categoryId: number = null): string {
        let baseUrl = `${this.baseApi}/products/${productId}/categories`;
        if (categoryId) {
            baseUrl += `/${categoryId}`;
        }
        return baseUrl;
    }
}
