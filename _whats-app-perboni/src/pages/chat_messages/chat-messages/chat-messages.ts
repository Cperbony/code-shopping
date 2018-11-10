import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ChatGroup, ChatMessage} from "../../../app/model";
import {FirebaseAuthProvider} from "../../../providers/auth/firebase-auth";
import {Observable} from "rxjs/Observable";
import {ChatMessageFbProvider} from "../../../providers/firebase/chat-message-fb";

/**
 * Generated class for the ChatMessagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-chat-messages',
    templateUrl: 'chat-messages.html',
})
export class ChatMessagesPage {

    chatGroup: ChatGroup;
    messages: { key: string, value: ChatMessage }[] = [];
    limit = 20;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private chatMessageFb: ChatMessageFbProvider
    ) {
        // this.chatGroup = this.navParams.get('chat_group');
        this.chatGroup = {
            id: 1,
            name: '',
            photo_url: '',
        };
    }

    ionViewDidLoad() {
        this.chatMessageFb.latest(this.chatGroup, this.limit)
            .subscribe((messages) => {
                this.messages = messages;

                this.chatMessageFb.oldest(this.chatGroup, this.limit, messages[0].key)
                    .subscribe((messages) => this.messages = messages);
            });




        // const database = this.firebaseAuth.firebase.database();
        //
        // database
        //     .ref(`chat_groups_messages/${this.chatGroup.id}/messages`)
        //     .on('child_added', (data) => {
        //         const message = data.val();
        //         message.user = Observable.create((observer) => {
        //             database.ref(`users/${message.user_id}`)
        //                 .on('value', (data) => {
        //                     const user = data.val();
        //                     observer.next(user);
        //                 });
        //         });
        //         message.user.subscribe((user) => console.log(user));
        //
        //         this.messages.push(message);
        //     });
    }

}
