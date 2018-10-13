import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
// import * as firebase from 'firebase';
import {FirebaseAuthProvider} from "../../providers/auth/firebase-auth";
import {AuthProvider} from "../../providers/auth/auth";
import {MainPage} from "../main/main";

// declare const firebaseui;
// (<any>window).firebase = firebase;

/**
 * Generated class for the LoginPhoneNumberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-login-phone-number',
    templateUrl: 'login-phone-number.html',
})
export class LoginPhoneNumberPage {

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private firebaseAuth: FirebaseAuthProvider,
                private authService: AuthProvider) {
    }

    ionViewDidLoad() {
        this.firebaseAuth.getToken().then(token => console.log(token));
        const unsubscribed = this.firebaseAuth.firebase.auth()
            .onAuthStateChanged((user) => {
                console.log(user);
                console.log(this.firebaseAuth.firebase.auth().currentUser);
                if (user) {
                    this.extractedAuthUser();
                }
            });
        unsubscribed();
        this.firebaseAuth.makePhoneNumberForm('#firebase-ui');
    }

    private extractedAuthUser() {
        this.authService
            .login()
            .subscribe((token) => {
                console.log('redirecionar para o main');
                this.redirectToMainPage();
            }, (responseError) => {
                // this.firebaseAuth.makePhoneNumberForm('#firebase-ui')
                //     .then(() => {
                //         this.extractedAuthUser();
                //     });
                console.log('redirecionar para a criação da conta do cliente');
            });
    }

    redirectToMainPage() {
        this.navCtrl.setRoot(MainPage);
    }

    redirectToCustomerCreatePage() {
        // this.navCtrl.setRoot(MainPage);
    }
}
