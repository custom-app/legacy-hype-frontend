import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './app-field.component.html',
  styleUrls: ['./app-field.component.scss']
})
export class AppFieldComponent implements OnInit {

  @Input() class = '';
  @Input() placeholder = 'Placeholder';
  @Input() append_text = '';
  @Input() append_text_color = 'green--text';
  @Input() formControlName = '';
  @Input() required = false;
  @Input() reedOnly = false;
  @Output() btnClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>()

  constructor() { }

  ngOnInit(): void {
  }

}
