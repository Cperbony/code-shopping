import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {ListPage} from '../pages/list/list';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {LoginOptionsPage} from "../pages/login-options/login-options";
import {LoginPhoneNumberPage} from "../pages/login-phone-number/login-phone-number";
import {ResetPhoneNumberPage} from "../pages/reset-phone-number/reset-phone-number";
import {FirebaseAuthProvider} from '../providers/auth/firebase-auth';
import {AuthProvider} from '../providers/auth/auth';
import {HttpClientModule} from "@angular/common/http";
import {MainPage} from "../pages/main/main";
import {CustomerCreatePage} from "../pages/customer-create/customer-create";
import { CustomerHttpProvider } from '../providers/http/customer-http';

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        ListPage,
        LoginOptionsPage,
        LoginPhoneNumberPage,
        ResetPhoneNumberPage,
        CustomerCreatePage,
        MainPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        HttpClientModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        ListPage,
        LoginOptionsPage,
        LoginPhoneNumberPage,
        ResetPhoneNumberPage,
        CustomerCreatePage,
        MainPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        FirebaseAuthProvider,
        AuthProvider,
    CustomerHttpProvider
    ]
})
export class AppModule {
}
