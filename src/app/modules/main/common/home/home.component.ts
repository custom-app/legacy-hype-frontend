import { Component, OnInit } from '@angular/core';
import {Web3InitializeService} from "@services/web3/web3-initialize.service";
import {DialogService} from "@services/dialog/dialog.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _web3: Web3InitializeService, private _dialog:DialogService) { }

  ngOnInit(): void {
    this._dialog.close();
  }

  scrollToElement($element: any): void {
    $element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  }

  initialize(){
    this._web3.connect();
  }
}
