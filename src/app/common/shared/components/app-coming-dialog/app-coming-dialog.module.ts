import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComingDialogComponent } from './app-coming-dialog.component';
import {SharedModule} from "@shared/shared.module";
import {MaterialModule} from "@shared/material/material.module";



@NgModule({
  declarations: [
    AppComingDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    AppComingDialogComponent
  ]
})
export class AppComingDialogModule { }
