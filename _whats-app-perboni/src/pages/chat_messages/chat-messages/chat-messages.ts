import {Component, ViewChild} from '@angular/core';
import {Content, InfiniteScroll, IonicPage, NavController, NavParams} from 'ionic-angular';
import {ChatGroup, ChatMessage} from "../../../app/model";
import {ChatMessageFbProvider} from "../../../providers/firebase/chat-message-fb";
import {IsCurrentUserPipe} from "../../../pipes/is-current-user/is-current-user";
import {RedirectIfNotAuthProvider} from "../../../providers/redirect-if-not-auth/redirect-if-not-auth";

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
    showContent = false;
    canMoreMessages = true;
    countNewMessages = 20;

    @ViewChild(Content)
    content: Content;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private chatMessageFb: ChatMessageFbProvider,
                private isCurrentUser: IsCurrentUserPipe,
                private redirectIfNotAuth: RedirectIfNotAuthProvider
    ) {
        // this.chatGroup = this.navParams.get('chat_group');
        this.chatGroup = {
            id: 1,
            name: '',
            photo_url: '',
            viewed: false,
        };
    }

    ionViewCanEnter() {
        return this.redirectIfNotAuth.ionViewCanEnter();
    }

    ionViewDidLoad() {
        this.chatMessageFb
            .latest(this.chatGroup, this.limit)
            .subscribe((messages) => {
                this.messages = messages;
                setTimeout(() => {
                    this.scrollToBottom();
                    this.showContent = true;
                }, 500);
            });
        this.chatMessageFb.onAdded(this.chatGroup)
            .subscribe((message) => {
                this.messages.push(message);
                if (this.isCurrentUser.transform(message.value.user_id)) {
                    return;
                }
                this.countNewMessages++;
            });
    }

    doInfinite(infiniteScroll: InfiniteScroll) {
        this.chatMessageFb
            .oldest(this.chatGroup, this.limit, this.messages[0].key)
            .subscribe((messages) => {
                if (!messages.length) {
                    this.canMoreMessages = false;
                }
                this.messages.unshift(...messages);
                infiniteScroll.complete();
            }, () => infiniteScroll.complete());
    }

    scrollToBottom() {
        this.countNewMessages = 0;
        this.content.scrollToBottom(0);
    }

    showButtonScrollBottom() {
        const dimensions = this.content.getContentDimensions();
        const contentHeight = dimensions.contentHeight;
        const scrollTop = dimensions.scrollTop;
        const scrollHeight = dimensions.scrollHeight;

        return scrollHeight > scrollTop + contentHeight;
        // console.log('scrolltop', dimensions.scrollTop, 'scrollHeight', dimensions.scrollHeight, 'contentHeight', dimensions.contentHeight);
    }


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
