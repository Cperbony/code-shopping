import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {User} from "../../models";
import {map} from "rxjs/operators";

interface Profile {
    name?: string;
    email?: string;
    password?: string;
    photo?: File | false | null,
    token?: string;
}

@Injectable({
    providedIn: 'root'
})
export class UserProfileHttpService {

    private baseUrl = `${environment.api.url}/profile`;

    constructor(private http: HttpClient) {
    }

    update(data: Profile): Observable<User> {
        const formData = this.formDataToSend(data);

        return this.http
            .post<{ data: User }>(this.baseUrl, formData)
            .pipe(
                map(response => response.data)
            );
    }

    private formDataToSend(data): FormData {
        const datakeys = Object.keys(data);
        this.deletePhotoKey(datakeys);
        const formData = new FormData(); //multipart/form-data
        for (const key of datakeys) {
            if (data[key] !== '' && data[key] != null) {
                formData.append(key, data[key])
            }
        }
        this.dataInstanceOfFile(data, formData);
        this.dataPhotoIsNull(data, formData);
        formData.append('_method', 'PATCH');
        return formData;
    }


    private dataInstanceOfFile(data, formData) {
        if (data.photo instanceof File) {
            formData.append('photo', data.photo);
        }
    }

    private dataPhotoIsNull(data, formData) {
        if (data.photo === null) {
            formData.append('remove_photo', '1');
        }
    }

    private deletePhotoKey(array) {
        array.splice(array.indexOf('photo'), 1);
    }
}
