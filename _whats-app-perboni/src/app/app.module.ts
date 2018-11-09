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
import {CustomerHttpProvider} from '../providers/http/customer-http';
import {ReactiveFormsModule} from "@angular/forms";
import {SuperTabsModule} from "ionic2-super-tabs";
import {ChatGroupListComponent} from "../components/chat-group-list/chat-group-list";
import {ChatMessagesPageModule} from "../pages/chat_messages/chat-messages/chat-messages.module";
import {JWT_OPTIONS, JwtModule} from '@auth0/angular-jwt';
import {ChatMessageHttpProvider} from '../providers/http/chat-message-http';
import {Media} from "@ionic-native/media";
import {File} from "@ionic-native/file";
import {ChatGroupFbProvider} from '../providers/firebase/chat-group-fb';

function jwtFactory(authService: AuthProvider) {
    return {
        whitelistedDomains: [
            new RegExp('localhost:8000/*'),
            new RegExp('192.168.25.48:8000/*'),
            new RegExp('192.168.25.48:8001/*'),
            new RegExp('192.168.25.1:8000/*'),
            new RegExp('192.168.25.1:8001/*'),
        ],
        tokenGetter: () => {
            return authService.getToken();
        }
    }
}

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        ListPage,
        LoginOptionsPage,
        LoginPhoneNumberPage,
        ResetPhoneNumberPage,
        CustomerCreatePage,
        MainPage,
        ChatGroupListComponent
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        HttpClientModule,
        ReactiveFormsModule,
        SuperTabsModule.forRoot(),
        ChatMessagesPageModule,
        JwtModule.forRoot({
            jwtOptionsProvider: {
                provide: JWT_OPTIONS,
                useFactory: jwtFactory,
                deps: [AuthProvider]
            }
        }),
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
        MainPage,
        ChatGroupListComponent
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        FirebaseAuthProvider,
        AuthProvider,
        CustomerHttpProvider,
        ChatMessageHttpProvider,
        Media,
        File,
        ChatGroupFbProvider,

    ]
})
export class AppModule {
}
