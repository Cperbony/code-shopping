import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import fieldsOptions from "./chat-group-fields-options";
import {FormGroup} from "@angular/forms";

@Component({
    selector: 'chat-group-form',
    templateUrl: './chat-group-form.component.html',
    styleUrls: ['./chat-group-form.component.css']
})
export class ChatGroupFormComponent implements OnInit {

    @Input()
    form: FormGroup;

    constructor(private changeRef: ChangeDetectorRef) {
    }

    ngOnInit() {
    }

    ngOnChanges() {
        this.changeRef.detectChanges();
    }

    get fieldsOptions(): any {
        return fieldsOptions;
    }

    choosePhoto(files: FileList) {
        if (!files.length) {
            return;
        }
        this.form.get('photo').setValue(files[0]);
    }

}
