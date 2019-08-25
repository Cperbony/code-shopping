import {Component, OnInit} from '@angular/core';
import pace from 'pace';
import {AuthService} from "./services/auth.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app';

    constructor(public authService: AuthService) {

    }

    ngOnInit(): void {
        pace.start({
            document: false
        });
    }

    canShowNavbar() {
        return this.authService.isAuth();
    }
}
