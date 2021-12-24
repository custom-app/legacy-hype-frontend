import { Component, OnInit, HostListener } from '@angular/core';
import {Web3InitializeService} from "@services/web3/web3-initialize.service";
import {IAccount} from "@models/interfaces/account.interface";
import {DialogService} from "@services/dialog/dialog.service";

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  readonly PAGE_KEY: string = 'HEADER_NAV.';
  showFiller = false;

  constructor(private _web3: Web3InitializeService, private _dialog: DialogService) { }

  ngOnInit(): void {
  }

  initialize(){
    this._web3.connect();
  }

  get account(): IAccount {
    return this._web3.account;
  }

  open(element: any){
    element.toggle();
    this._dialog.close();
  }
}
