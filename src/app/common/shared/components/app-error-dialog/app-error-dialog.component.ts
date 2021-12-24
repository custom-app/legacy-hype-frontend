import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {DialogService} from "@services/dialog/dialog.service";

@Component({
  selector: 'app-error-dialog',
  templateUrl: './app-error-dialog.component.html',
  styleUrls: ['./app-error-dialog.component.scss']
})
export class AppErrorDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private _dialog: DialogService) { }

  ngOnInit(): void {
  }

  close() {
    this._dialog.close();
  }

}
