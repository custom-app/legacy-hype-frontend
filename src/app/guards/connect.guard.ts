import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {Web3InitializeService} from "@services/web3/web3-initialize.service";

@Injectable({
  providedIn: 'root'
})
export class ConnectGuard implements CanActivate {
  constructor(private _router: Router, private _web3: Web3InitializeService,) {}
  canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this._web3.account.address) {
      return true;
    }

    this._router.navigate(['']);

    return false;
  }

}
