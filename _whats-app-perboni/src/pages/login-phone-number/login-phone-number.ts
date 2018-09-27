import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import * as firebase from 'firebase';
import {FirebaseAuthProvider} from "../../providers/auth/firebase-auth";

declare const firebaseui;
(<any>window).firebase = firebase;

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

    constructor(public navCtrl: NavController, public navParams: NavParams,
                private firebaseAuth: FirebaseAuthProvider) {
    }

    ionViewDidLoad() {
        this.firebaseAuth.makePhoneNumberForm('#firebase-ui');
    }

}
