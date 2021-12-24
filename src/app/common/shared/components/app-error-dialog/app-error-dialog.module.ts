import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppErrorDialogComponent } from './app-error-dialog.component';
import {SharedModule} from "@shared/shared.module";
import {MaterialModule} from "@shared/material/material.module";



@NgModule({
  declarations: [
    AppErrorDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
  ],
  exports: [AppErrorDialogComponent]
})
export class AppErrorDialogModule { }
