import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FirebaseAuthService} from "../../../services/firebase-auth.service";
import {ModalComponent} from "../../bootstrap/modal/modal.component";

@Component({
    selector: 'phone-number-auth-modal',
    templateUrl: './phone-number-auth-modal.component.html',
    styleUrls: ['./phone-number-auth-modal.component.css']
})
export class PhoneNumberAuthModalComponent implements OnInit {

    unsubscribed;

    @ViewChild(ModalComponent)
    modal: ModalComponent;

    @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();

    constructor(private firebaseAuth: FirebaseAuthService) {
    }

    ngOnInit() {

    }

    showModal() {
        this.firebaseAuth.makePhoneNumberForm('#firebase-ui');
        this.firebaseAuth.logout().then(()=> {
            this.onAuthStateChange();
        });
        this.modal.show();
    }

    onAuthStateChange() {
        this.unsubscribed = this.firebaseAuth
            .firebase.auth()
            .onAuthStateChanged(
                (user) => {
                    if (user) {
                        this.modal.hide();
                        this.onSuccess.emit(user);
                    }
                });
    }

    onHideModal() {
        this.unsubscribed();
    }

}
