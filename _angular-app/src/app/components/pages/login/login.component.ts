import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    credentials = {
        email: 'admin@user.com',
        password: 'secret'
    };

    showMessageError: boolean = false;

    constructor(private authService: AuthService, private router: Router) {
    }

    ngOnInit() {
    }

    submit() {
        //Enviar uma requisição Ajax com as credenciais para a API
        //Conceito de generics, especificar um tipo que tem influência em uma estrutura
        this.authService.login(this.credentials)
            .subscribe((data) => {
                // const token = data.token;
                // window.localStorage.setItem('token', token);
                this.router.navigate(['categories/list']);
            }, () => this.showMessageError = true);
        return false;
    }
}
