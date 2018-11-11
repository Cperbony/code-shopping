import {Injectable} from '@angular/core';
import {ChatGroup, ChatMessage} from "../../app/model";
import {FirebaseAuthProvider} from "../auth/firebase-auth";
import {Observable} from "rxjs/Observable";


/*
  Generated class for the ChatMessageFbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChatMessageFbProvider {

    database;

    constructor(private firebaseAuth: FirebaseAuthProvider) {
        this.database = this.firebaseAuth.firebase.database();
    }

    latest(group: ChatGroup, limit: number): Observable<{ key: string, value: ChatMessage }[]> {
        return Observable.create((observer) => {
            this.database.ref(`chat_groups_messages/${group.id}/messages`)
                .orderByKey()
                .limitToLast(limit)
                .once('value', (data) => {
                    const messages = [];
                    data.forEach((child) => {
                        const message = child.val() as ChatMessage;
                        message.user$ = this.getUser(message.user_id);
                        messages.push({key: child.key, value: message});
                    });
                    observer.next(messages)
                }, (error) => console.log(error));
        });
    }

    oldest(group: ChatGroup, limit: number, messageKey: string): Observable<{ key: string, value: ChatMessage }[]> {
        return Observable.create((observer) => {
            this.database.ref(`chat_groups_messages/${group.id}/messages`)
                .orderByKey()
                .limitToLast(limit + 1)
                .endAt(messageKey)
                .once('value', (data) => {
                    const messages = [];
                    data.forEach((child) => {
                        const message = child.val() as ChatMessage;
                        message.user$ = this.getUser(message.user_id);
                        messages.push({key: child.key, value: message});
                    });
                    messages.splice(messages.length - 1, 1);
                    console.log(messages);
                    observer.next(messages)
                }, (error) => console.log(error));
        });
    }

    onAdded(group: ChatGroup): Observable<{ key: string, value: ChatMessage }> {
        return Observable.create((observer) => {
            this.database.ref(`chat_groups_messages/${group.id}/messages`)
                .orderByChild('created_at')
                .startAt(Date.now())
                .on('child_added', (data) => {
                    const message = data.val() as ChatMessage;
                    message.user$ = this.getUser(message.user_id);
                    observer.next({key: data.key, value: message});
                }, (error) => console.log(error));
        });
    }

    private getUser(userId: string): Observable<{ name: string, photo_url: string }> {
        return Observable.create(observer => {
            this.database
                .ref(`users/${userId}`)
                .once('value', (data) => {
                    const user = data.val();
                    observer.next(user);
                })
        })
    }

}
