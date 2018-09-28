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
        this.firebaseAuth.getUser()
            .then((user) => {
               console.log(user);
               //Outra forma d epegar o usuário, uma vez capturado o usuário
                //Conseguimos pegar pelo currentUser
               // console.log(this.firebaseAuth.firebase.auth().currentUser);
            });
        this.firebaseAuth.makePhoneNumberForm('#firebase-ui');
    }
}
