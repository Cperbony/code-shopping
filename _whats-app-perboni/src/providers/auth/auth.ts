import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {FirebaseAuthProvider} from "./firebase-auth";
import {fromPromise} from 'rxjs/observable/fromPromise';
import {flatMap} from "rxjs/operators";
import {User} from "../../app/model";
import {JwtHelperService} from '@auth0/angular-jwt';

const TOKEN_KEY = 'code_shopping_token';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

    me: User = null;

    constructor(public http: HttpClient,
                private firebaseAuth: FirebaseAuthProvider) {
        const token = this.getToken();
        this.setUserFromToken(token);

    }

    login(): Observable<{ token: string }> {
        return fromPromise(this.firebaseAuth.getToken())
            .pipe(
                flatMap(token => {
                    return this.http.post<{ token: string }>('http://localhost:8000/api/login_vendor', {token})
                })
            );
    }

    setToken(token: string) {
        this.setUserFromToken(token);
        token ? window.localStorage.setItem(TOKEN_KEY, token) : window.localStorage.removeItem(TOKEN_KEY);
    }

    private setUserFromToken(token: string) {
        const decodedPayloadToken = new JwtHelperService().decodeToken(token);
        this.me = decodedPayloadToken ? {
            id: decodedPayloadToken.sub,
            name: decodedPayloadToken.name,
            email: decodedPayloadToken.email,
            profile: decodedPayloadToken.profile
        } : null;
    }

    getToken(): string | null {
        return window.localStorage.getItem(TOKEN_KEY);
    }

    isAuth(): boolean {
        const token = this.getToken();
        return !new JwtHelperService().isTokenExpired(token, 30);
    }

}
