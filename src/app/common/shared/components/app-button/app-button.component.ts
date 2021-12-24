import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './app-button.component.html',
  styleUrls: ['./app-button.component.scss']
})
export class AppButtonComponent implements OnInit {

  @Input() text = 'Button';
  @Input() color = 'primary';
  @Input() disabled = false;
  @Output() btnClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>()

  constructor() { }

  ngOnInit(): void {

  }

}
