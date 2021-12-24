import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDialogComponent } from './app-dialog.component';
import {SharedModule} from "@shared/shared.module";
import {MaterialModule} from "@shared/material/material.module";



@NgModule({
  declarations: [
    AppDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
  ],
  exports: [AppDialogComponent]
})
export class AppDialogModule { }
