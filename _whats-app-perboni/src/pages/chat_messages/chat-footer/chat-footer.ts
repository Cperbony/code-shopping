import {Component, ViewChild} from '@angular/core';
import {ChatMessageHttpProvider} from "../../../providers/http/chat-message-http";
import {TextInput} from "ionic-angular";
import Timer from 'easytimer.js/dist/easytimer.min';
import {AudioRecorderProvider} from "../../../providers/audio-recorder/audio-recorder";

/**
 * Generated class for the ChatFooterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'chat-footer',
    templateUrl: 'chat-footer.html'
})
export class ChatFooterComponent {

    text: string = '';
    messageType = 'text';
    timer = new Timer();

    @ViewChild('inputFileImage')
    inputFileImage: TextInput;

    constructor(private chatMessageHttp: ChatMessageHttpProvider,
                private audioRecorder: AudioRecorderProvider) {
    }

    holdAudioButton() {
        // const record = this.media.create('recording.aac');
        // record.startRecord();
        // setTimeout(() => {
        //     record.stopRecord();
        //     record.play();
        // }, 5000);

        this.audioRecorder.startRecord();
        this.timer.start({precision: 'seconds'});
        this.timer.addEventListener('secondsUpdated', (e) => {
            // console.log(e);
            const time = this.getMinuteSeconds();
            this.text = `${time} Gravando ...`;
        });
    }

    private getMinuteSeconds() {
        return this.timer.getTimeValues().toString().substring(3);
    }

    releaseAudioButton() {
        this.timer.stop();
        this.text = '';
        this.audioRecorder.stopRecord()
            .then((blob) => console.log(blob));
    }

    sendMessageText() {
        this.sendMessage({content: this.text, type: 'text'});
    }

    sendMessageImage(files: FileList) {
        if (!files.length) {
            return;
        }
        this.sendMessage({content: files[0], type: 'image'});
    }

    sendMessage(data: { content, type }) {
        this.chatMessageHttp
            .create(1, {type: this.messageType, content: this.text})
            .subscribe(() => console.log('enviou'));
    }

    selectImage() {
        const nativeElement: HTMLElement = this.inputFileImage.getElementRef().nativeElement;
        const inputFile = nativeElement.querySelector('input');
        inputFile.click();
    }

    getIconSendMessage() {
        if (this.messageType === 'text') {
            return this.text === '' ? 'mic' : 'send';
        }
        return 'mic';
    }
}
