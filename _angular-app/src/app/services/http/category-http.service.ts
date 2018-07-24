import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from 'rxjs/internal/Observable';
import {map} from 'rxjs/operators';

import {Category} from "../../models";
import {HttpResource, SearchParams, SearchParamsBuilder} from "./http-resource";
import {AuthService} from "../auth.service";

//design pattern - Singleton

@Injectable({
    providedIn: 'root'
})
export class CategoryHttpService implements HttpResource<Category> {

    private baseUrl = 'http://localhost:8000/api/categories';

    constructor(private http: HttpClient, private authService: AuthService) {
    }

    list(searchParams: SearchParams): Observable<{ data: Array<Category>, meta: any }> {
        // const token = this.authService.getToken();
        const sParams = new SearchParamsBuilder(searchParams).makeObject();
        const params = new HttpParams({
            fromObject: (<any>sParams)
        });
        return this.http
            .get<{ data: Array<Category>, meta: any }>
            (this.baseUrl, {params});
    }

    get(id: number): Observable<Category> {
        // const token = this.authService.getToken();
        return this.http
            .get<{ data: Category }>
            (`${this.baseUrl}/${id}`)
            .pipe(
                map(response => response.data)
            )
    }

    create(data: Category): Observable<Category> {
        // const token = this.authService.getToken();
        return this.http
            .post<{ data: Category }>(this.baseUrl, data)
            .pipe(
                map(response => response.data)
            );
    }

    update(id: number, data: Category): Observable<Category> {
        // const token = this.authService.getToken();
        return this.http
            .put<{ data: Category }>(`${this.baseUrl}/${id}`, data)
            .pipe(
                map(response => response.data)
            );
    }

    destroy(id: number): Observable<any> {
        // const token = this.authService.getToken();
        return this.http
            .delete<{ data: Category }>
            (`${this.baseUrl}/${id}`)
    }
}

