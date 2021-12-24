import { Component, OnInit } from '@angular/core';
import {BuyService} from "@services/buy/buy.service";
import {IAccount} from "@models/interfaces/account.interface";
import {Web3InitializeService} from "@services/web3/web3-initialize.service";
import {DialogService} from "@services/dialog/dialog.service";

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent implements OnInit {
  rate = {
    publicRate: 0.003
  };
  promocode!: string;
  usdt!: number;
  hype!: number;

  constructor(private _buy: BuyService, private _web3: Web3InitializeService, private _dialog: DialogService) {}

  ngOnInit(): void {
    this.initialize();
    this._dialog.close();
  }

  buyHypeToken(val: number) {
    if (Math.sign(val) === 1) {
      this.hype = val;
      this.usdt = Math.round(val * this.rate.publicRate);
    } else {
      this.usdt = 0;
    }
  }

  saleUSDTToken(val: number) {
    if (Math.sign(val) === 1) {
      this.usdt = val;
      this.hype = Math.round(val / this.rate.publicRate);
    } else {
      this.hype = 0;
    }
  }

  initialize() {
    if(!this.account.address) {
      this._web3.connect();
    }
  }

  buyHype() {
    this._buy.buyWithUSDT(this.usdt, this.promocode);
  }

  get account(): IAccount {
    return this._web3.account;
  }
}
