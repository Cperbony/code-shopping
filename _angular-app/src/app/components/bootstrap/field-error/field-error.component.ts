import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'field-error',
  templateUrl: './field-error.component.html',
  styleUrls: ['./field-error.component.css'],
    host: {
    'class': 'invalid-feedback'
    }
})
export class FieldErrorComponent implements OnInit {

  @Input()
  field: FormControl;

  constructor() { }

  ngOnInit() {
  }

}
