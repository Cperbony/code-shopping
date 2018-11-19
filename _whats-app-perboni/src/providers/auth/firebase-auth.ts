import {Injectable} from '@angular/core';
import * as firebase from 'firebase';
import firebaseConfig from '../../app/firebase-config';
import scriptjs from 'scriptjs';

declare const firebaseui;
(<any>window).firebase = firebase;

/*
  Generated class for the FirebaseAuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseAuthProvider {

    private ui;

    constructor() {
        firebase.initializeApp(firebaseConfig);
    }

    get firebase() {
        return firebase;
    }

    async makePhoneNumberForm(selectorElement: string): Promise<any> {
        // const firebaseui = await this.getFirebaseUI();
        await this.getFirebaseUI();
        return new Promise<any>((resolve) => {
            const uiConfig = {
                signInOptions: [
                    firebase.auth.PhoneAuthProvider.PROVIDER_ID
                ],
                callbacks: {
                    signInSuccessWithAuthResult: (authResult, redirectUrl) => {
                        console.log(authResult);
                        console.log(redirectUrl);
                        resolve(true);
                        return false;
                    }
                }
            };
            this.makeFormFirebaseUi(selectorElement, uiConfig);
        });
    }

    private makeFormFirebaseUi(selectorElement, uiConfig) {
        if (!this.ui) {
            this.uiStart(selectorElement, uiConfig);
        } else {
            this.ui.delete().then(() => {
                this.uiStart(selectorElement, uiConfig);
            });
        }
    }

    private uiStart(selectorElement, uiConfig) {
        this.ui = new firebaseui.auth.AuthUI(firebase.auth());
        this.ui.start(selectorElement, uiConfig);
    }

    //Sistema de promessa JS, Assícrona
    private async getFirebaseUI(): Promise<any> {
        return new Promise((resolve, reject) => {
            if (window.hasOwnProperty('firebaseui')) {
                console.log('Sem scriptjs');
                resolve(firebaseui);
                return;
            }
            console.log('Entrou no construtor');
            scriptjs('https://www.gstatic.com/firebasejs/ui/3.4.1/firebase-ui-auth__pt.js', () => {
                console.log('Carregou FirebaseUI');
                resolve(firebaseui);
            }, (responseError) => {
                reject(responseError);
            });
        });
    }

    async getToken(): Promise<string> {
        try {
            //Capturar o usuário
            const user = await this.getUser();
            if (!user) {
                throw new Error('User not found');
            }
            const token = await user.getIdTokenResult();
            return token.token;
        } catch (e) {
            return Promise.reject(e);
        }
    }

    getUser(): Promise<firebase.User | null> {
        const currentUser = this.getCurrentUser();
        if (currentUser) {
            return Promise.resolve(currentUser);
        }
        return new Promise((resolve, reject) => {
            const unsubscribed = this.firebase
                .auth()
                .onAuthStateChanged(
                    (user) => {
                        // console.log('getUser' + user);
                        resolve(user);
                        unsubscribed();
                    },
                    (error) => {
                        reject(error);
                        unsubscribed();
                    });
        });
    }

    async isAuth(): Promise<boolean> {
        try {
            const user = await this.getUser();
            return user !== null;
        } catch (e) {
            return false;
        }


    }

    private getCurrentUser(): firebase.User | null {
        return this.firebase.auth().currentUser;
    }
}