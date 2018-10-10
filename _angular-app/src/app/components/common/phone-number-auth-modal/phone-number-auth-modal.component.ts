import {Component, OnInit, ViewChild} from '@angular/core';
import {FirebaseAuthService} from "../../../services/firebase-auth.service";
import {ModalComponent} from "../../bootstrap/modal/modal.component";

@Component({
    selector: 'app-phone-number-auth-modal',
    templateUrl: './phone-number-auth-modal.component.html',
    styleUrls: ['./phone-number-auth-modal.component.css']
})
export class PhoneNumberAuthModalComponent implements OnInit {

    @ViewChild(ModalComponent)
    modal: ModalComponent;

    constructor(private firebaseAuth: FirebaseAuthService) {
    }

    ngOnInit() {
        const unsubscribed = this.firebaseAuth
            .firebase.auth()
            .onAuthStateChanged(
                (user) => {
                    if (user) {
                        console.log(user);
                        unsubscribed();
                        console.log(user + 'after');
                    }
                });
        this.firebaseAuth.makePhoneNumberForm('#firebase-ui');
    }

    showModal() {
        this.modal.show();
    }

}
