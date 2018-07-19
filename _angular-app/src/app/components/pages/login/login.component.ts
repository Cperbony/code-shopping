import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    credentials = {
        email: 'admin@user.com',
        password: 'secret'
    };

    showMessageError = false;

    constructor(private http: HttpClient, private router: Router) {
    }

    ngOnInit() {
    }

    submit() {
        //Enviar uma requisição Ajax com as credenciais para a API
        //Conceito de generics, especificar um tipo que tem influência em uma estrutura
        this.http.post<any>('http://localhost:8000/api/login', this.credentials)
            .subscribe((data) => {
                const token = data.token;
                window.localStorage.setItem('token', token);
                this.router.navigate(['categories/list']);

            }, () => this.showMessageError = true);
        return false;
    }
}