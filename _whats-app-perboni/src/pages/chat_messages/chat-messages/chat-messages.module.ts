import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ChatMessagesPage} from './chat-messages';
import {ChatAvatarComponent} from "../chat-avatar/chat-avatar";
import {ChatContentDetailComponent} from "../chat-content-detail/chat-content-detail";
import {ChatContentLeftComponent} from "../chat-content-left/chat-content-left";
import {ChatContentRightComponent} from "../chat-content-right/chat-content-right";
import {ChatFooterComponent} from "../chat-footer/chat-footer";
import {MomentModule} from "ngx-moment";
import {PipesModule} from "../../../pipes/pipes.module";
import {LongPressModule} from "ionic-long-press";
import {AudioRecorderProvider} from "../../../providers/audio-recorder/audio-recorder";
import {ChatMessageFbProvider} from "../../../providers/firebase/chat-message-fb";

@NgModule({
    declarations: [
        ChatMessagesPage,
        ChatAvatarComponent,
        ChatContentDetailComponent,
        ChatContentLeftComponent,
        ChatContentRightComponent,
        ChatFooterComponent
    ],
    imports: [
        IonicPageModule.forChild(ChatMessagesPage),
        MomentModule,
        PipesModule,
        LongPressModule,
    ],
    providers: [
        AudioRecorderProvider,
        ChatMessageFbProvider,
    ]
})
export class ChatMessagesPageModule {
}
