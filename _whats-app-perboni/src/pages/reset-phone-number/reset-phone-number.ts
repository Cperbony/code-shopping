import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {FirebaseAuthProvider} from "../../providers/auth/firebase-auth";
import {FormControl, Validators} from "@angular/forms";
import {CustomerHttpProvider} from "../../providers/http/customer-http";
import {LoginOptionsPage} from "../login-options/login-options";
import {environment} from "@app/env";

/**
 * Generated class for the ResetPhoneNumberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-reset-phone-number',
    templateUrl: 'reset-phone-number.html',
})
export class ResetPhoneNumberPage {

    email = new FormControl('', [Validators.required, Validators.email]);

    hasBtnEmailClicked = false;
    showFirebaseUI = environment.loadFirebaseUI;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private firebaseAuth: FirebaseAuthProvider,
                private customerHttp: CustomerHttpProvider,
                private alertCtrl: AlertController,
                private toastCtrl: ToastController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ResetPhoneNumberPage');
    }

    loadFirebaseUI() {
        this.hasBtnEmailClicked = true;
        this.handleUpdate();
    }

    handleUpdate() {
        if (environment.loadFirebaseUI) {
            this.firebaseAuth
                .makePhoneNumberForm('#firebase-ui')
                .then(() => {
                    this.requestUpdatePhoneNumber();
                });
        }
    }

    requestUpdatePhoneNumber() {
        const email = this.email.value;
        this.customerHttp.requestUpdatePhoneNumber(email)
            .subscribe(() => {
                    const alert = this.alertCtrl.create({
                        title: 'Alerta',
                        subTitle: `
                            Um e-mail com a validação da mudança foi enviado.
                            Para logar, valide com o novo telefone.
                            `,
                        buttons: [
                            {
                                text: 'Ok',
                                handler: () => {
                                    this.navCtrl.setRoot(LoginOptionsPage);
                                }
                            }
                        ]
                    });
                    alert.present();
                },
                () => {
                    const toast = this.toastCtrl.create({
                        message: 'Não foi possível requisitar a alteração do telefone',
                        duration: 3000
                    });
                    toast.present();
                    this.handleUpdate();
                });
    }

}
