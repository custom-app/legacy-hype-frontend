import { Component, OnInit } from '@angular/core';
import {Web3InitializeService} from "@services/web3/web3-initialize.service";

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.scss']
})
export class CabinetComponent implements OnInit {

  constructor(private _web3: Web3InitializeService) { }

  ngOnInit(): void {
  }


  get balance(): any {
    return this._web3.hype_balance;
  }
}
