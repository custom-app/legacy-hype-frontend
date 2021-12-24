import { Component, OnInit } from '@angular/core';
import {AppAbstractComponent} from "@app/misk/abstracts/app.abstract.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends AppAbstractComponent implements OnInit{
  title = 'hype';

  ngOnInit(): void {
  }
}
