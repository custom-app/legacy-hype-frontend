import { Component, OnInit, Input } from '@angular/core';
import {IEntity} from "@models/interfaces/entity.interface";

@Component({
  selector: 'app-table',
  templateUrl: './app-table.component.html',
  styleUrls: ['./app-table.component.scss']
})
export class AppTableComponent implements OnInit {
  @Input() data: IEntity[] = [];
  @Input() columns: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
