import {Component} from '@angular/core';
import {ActionSheetController, IonicPage, NavController, NavParams} from 'ionic-angular';

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
                private actionSheetCtrl: ActionSheetController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginOptionsPage');
    }

    openLoginOptions() {
        const actionSheet = this.actionSheetCtrl.create({
            title: 'Já tem telefone cadastrado?',
            buttons: [
                {
                    text: 'Já tenho, Quero logar!'
                },
                {
                    text: 'Já tenho. Quero trocar o Telefone!'
                },
                {
                    text: 'Não tenho. Quero criar uma conta!'
                },
                {
                    text: 'TEste'
                },
                {
                    text:'Cancelar!',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    }

}
