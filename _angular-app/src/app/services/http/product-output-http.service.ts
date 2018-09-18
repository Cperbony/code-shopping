import {Injectable} from '@angular/core';
import {SearchParams, SearchParamsBuilder} from "./http-resource";
import {ProductOutput} from "../../models";
import {environment} from "../../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductOutputHttpService {

    private baseUrl =  `${environment.api.url}/outputs`;

    constructor(private http: HttpClient) {
    }

    list(searchParams: SearchParams): Observable<{ data: Array<ProductOutput>, meta: any }> {
        // const token = this.authService.getToken();
        const sParams = new SearchParamsBuilder(searchParams).makeObject();
        const params = new HttpParams({
            fromObject: (<any>sParams)
        });
        return this.http
            .get<{ data: Array<ProductOutput>, meta: any }>
            (this.baseUrl, {params});
    }

    get(id: number): Observable<ProductOutput> {
        // const token = this.authService.getToken();
        return this.http
            .get<{ data: ProductOutput }>
            (`${this.baseUrl}/${id}`)
            .pipe(
                map(response => response.data)
            )
    }

    create(data: {amount: number, product_id: number}): Observable<ProductOutput> {
        // const token = this.authService.getToken();
        return this.http
            .post<{ data: ProductOutput }>(this.baseUrl, data)
            .pipe(
                map(response => response.data)
            );
    }
}
