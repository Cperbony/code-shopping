import {Component, ElementRef, EventEmitter, OnInit, Output} from '@angular/core';

declare const $;

@Component({
    selector: 'modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

    @Output()
    onHide: EventEmitter<Event> = new EventEmitter<Event>();

    constructor(private element: ElementRef) {
    }

    ngOnInit() {
        const jQueryElement = this.getjQueryElement();

        jQueryElement.find('[modal-title]').addClass('modal-title');
        jQueryElement.find('[modal-body]').addClass('modal-body');
        jQueryElement.find('[modal-footer]').addClass('modal-footer');

        jQueryElement.on('hidden.bs.modal', (e) => {
            console.log(e);
            this.onHide.emit(event);
        })
    }

    show() {
        this.getjQueryElement().modal('show');
    }

    hide() {
        this.getjQueryElement().modal('hide');
    }

    private getjQueryElement() {
        const nativeElement = this.element.nativeElement;
        return $(nativeElement.firstChild);
    }

}
