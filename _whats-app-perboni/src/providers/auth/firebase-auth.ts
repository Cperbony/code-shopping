import {HttpClient} from '@angular/common/http';
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

    constructor(public http: HttpClient) {
        console.log('Hello FirebaseAuthProvider Provider');
    }

    //Sistema de promessa JS, Assícrona
    private getFirebaseUi(): Promise<any> {
        return new Promise((resolve, reject) => {
            scriptjs('https://www.gstatic.com/firebasejs/ui/3.4.1/firebase-ui-auth__pt.js', () => {
                resolve(firebaseui)
            });
        });
    }
}

// firebase.initializeApp(firebaseConfig);
// const uiConfig = {
//     signInOptions: [
//         firebase.auth.PhoneAuthProvider.PROVIDER_ID
//     ]
// };
// const ui = new firebaseui.auth.AuthUI(firebase.auth());
// ui.start('#firebase-ui', uiConfig);
