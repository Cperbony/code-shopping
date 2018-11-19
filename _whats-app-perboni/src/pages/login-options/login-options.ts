import {Component} from '@angular/core';
import {ActionSheetController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {LoginPhoneNumberPage} from "../login-phone-number/login-phone-number";
import {ResetPhoneNumberPage} from "../reset-phone-number/reset-phone-number";
import {AuthProvider} from "../../providers/auth/auth";
import {MainPage} from "../main/main";

/**
 * Generated class for the LoginOptionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-login-options',
    templateUrl: 'login-options.html',
})
export class LoginOptionsPage {

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private actionSheetCtrl: ActionSheetController,
                private auth: AuthProvider) {
    }

    ionViewCanEnter() {
        this.auth
            .isFullyAuth()
            .then((isAuth) => {
                if (isAuth) {
                    setTimeout(() => {
                        this.navCtrl.setRoot(MainPage);
                    })
                }
                return !isAuth;
            });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginOptionsPage');
    }

    openLoginOptions() {
        const actionSheet = this.actionSheetCtrl.create({
            title: 'Já tem telefone cadastrado?',
            buttons: [
                {
                    text: 'Já tenho, Quero logar!',
                    handler: () => {
                        this.navCtrl.push(LoginPhoneNumberPage);
                    }
                },
                {
                    text: 'Já tenho. Quero trocar o Telefone!',
                    handler: () => {
                        this.navCtrl.push(ResetPhoneNumberPage);
                    }
                },
                {
                    text: 'Não tenho. Quero criar uma conta!',
                    handler: () => {
                        this.navCtrl.push(LoginPhoneNumberPage);
                    }
                },
                {
                    text: 'Cancelar!',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    }

}
