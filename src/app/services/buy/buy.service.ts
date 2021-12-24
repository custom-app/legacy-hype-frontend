import { Injectable } from '@angular/core';
import {Web3InitializeService} from "@services/web3/web3-initialize.service";
import { BigNumber } from  '@ethersproject/bignumber';
import Web3 from 'web3';
import {DialogService} from "@services/dialog/dialog.service";
import {AppErrorDialogComponent} from "@shared/components/app-error-dialog/app-error-dialog.component";

@Injectable({
  providedIn: 'root'
})
export class BuyService {

  constructor(private _web3: Web3InitializeService, private _dialog: DialogService) { }

  toBigNumber(val: number, decimal: number) {
    return BigNumber.from(val).mul(BigNumber.from(10).pow(BigNumber.from(decimal)))
  }

  async buyWithUSDT(amount: number, promocode: string) {
    try {
      const allowance = await this.allowance();
      if(allowance == 0) {
        await this.approve()
      }
      await this.swapUsdt(amount, promocode);
      await this._web3.getContractsData()
    } catch(e) {
      this.openDialog();
    }
  }

  async allowance(){
    return await this._web3.busd_contract.instance.methods.allowance(
      this._web3.account.address,
      this._web3.buy_contract.address
    ).call({ from: this._web3.account.address });
  }

  async approve() {
    let bigNumber = await this.toBigNumber(1000000000000, 18)
    return await this._web3.busd_contract.instance.methods.approve(
      this._web3.buy_contract.address,
      bigNumber
    ).send({from: this._web3.account.address, gas: '300000'});
  }

  async swapUsdt(amount: number, promocode: string) {
    let bigNumber = this.toBigNumber(amount, 18)
    let hashPromo = this.hashPromocode(promocode)
    return await this._web3.buy_contract.instance.methods.swap(
      bigNumber,
      hashPromo,
    ).send({ from: this._web3.account.address, gas: '300000'})
  }

  hashPromocode(promocode: string) {
    return Web3.utils.soliditySha3(promocode)
  }

  openDialog() {
    this._dialog.open<AppErrorDialogComponent, {title: string}>(
        {

          disableClose: false,
          data: {
            title: 'Error occured. Incorrect promocode',
          }
        },
        AppErrorDialogComponent
    ).subscribe()
  }
}
