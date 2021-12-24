import {Injectable, TemplateRef} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatDialogConfig} from "@angular/material/dialog/dialog-config";
import {ComponentType} from "@angular/cdk/portal";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  private _defaultConfig: MatDialogConfig = {
    maxWidth: 860,
    maxHeight: 714,
    width: '100%',
    panelClass: 'custom-dialog'
  }

  constructor(private _dialog: MatDialog) { }


  open<T = any, D = any>(config: MatDialogConfig<D>, component: ComponentType<T> | TemplateRef<T>): Observable<any> {
    const modal = this._dialog.open(component, {...this._defaultConfig, ...config});

    return modal.afterClosed();
  }

  close() {
    this._dialog.closeAll();
  }

  // close {
  //   const modal = this._dialog.closeAll();
  //
  // return modal.afterClosed();
  // }
}
