import {Component, OnInit } from '@angular/core';
import pace from 'pace';
import {falseIfMissing} from "protractor/built/util";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    title = 'app';

    ngOnInit(): void {
        pace.start({
            document: false
    });
    }
}
