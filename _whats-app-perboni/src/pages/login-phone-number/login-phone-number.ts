import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
// import * as firebase from 'firebase';
import {FirebaseAuthProvider} from "../../providers/auth/firebase-auth";
import {AuthProvider} from "../../providers/auth/auth";
import {MainPage} from "../main/main";
import {CustomerCreatePage} from "../customer-create/customer-create";

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

    //Se autenticado, direcionado para o Main
    //Carregar o firebaseui-form
    //Tiver autenticado, redireciona para o main page ou para o customercreatepage
    //Se voltar, carregar novamente o firebaseui-form. Mas como ?????

    ionViewDidLoad() {
        this.firebaseAuth.getToken().then(token => console.log(token));
        const currentUser = this.firebaseAuth.firebase.auth().currentUser;
        const unsubscribed = this.firebaseAuth.firebase.auth()
            .onAuthStateChanged((user) => {
                console.log(user);
                console.log(currentUser);
                if (user) {
                    this.handleAuthUser();
                    unsubscribed();
                }
            });
        this.loadForm();
    }

    handleAuthUser(){
        this.authService
            .login()
            .subscribe((token) => {
                console.log('redirecionar para o main');
                console.log(token);
                this.redirectToMainPage();
            }, (responseError) => {
                this.firebaseAuth.makePhoneNumberForm('#firebase-ui')
                    .then(()=>this.handleAuthUser());
                this.redirectToCustomerCreatePage();
                console.log(responseError);
                console.log('redirecionar para a criação da conta do cliente');
            });
    }

    loadForm(){
        this.firebaseAuth.makePhoneNumberForm('#firebase-ui');
    }

    redirectToMainPage() {
        this.navCtrl.setRoot(MainPage);
    }

    redirectToCustomerCreatePage() {
        this.navCtrl.push(CustomerCreatePage);
    }
}
