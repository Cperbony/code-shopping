import {Injectable} from '@angular/core';
import {Diagnostic} from "@ionic-native/diagnostic";
import {Platform} from "ionic-angular";

const CAN_WRITE_IN_STORAGE_KEY = 'can_write_in_storage';

@Injectable()
export class StoragePermissionProvider {

    constructor(private diagnostic: Diagnostic,
                private platform: Platform) {
    }

    requestPermission(): Promise<boolean> {
        return new Promise<boolean>(resolve => {
            if (this.platform.is('android') && !this.canWriteInStorage) {
                this.platform.ready().then(() => {
                    this.diagnostic.requestExternalStorageAuthorization()
                        .then(result => {
                            this.canWriteInStorage = (result === 'GRANTED');
                            resolve(this.canWriteInStorage);
                        });
                });
            } else {
                this.canWriteInStorage = true;
                resolve(this.canWriteInStorage);
            }
        });
    }

    get canWriteInStorage(): boolean {
        const canWriteInStorage = window.localStorage.getItem(CAN_WRITE_IN_STORAGE_KEY);
        return canWriteInStorage === 'true';
    }

    set canWriteInStorage(value) {
        window.localStorage.setItem(CAN_WRITE_IN_STORAGE_KEY, value ? 'true' : 'false');
    }
}
