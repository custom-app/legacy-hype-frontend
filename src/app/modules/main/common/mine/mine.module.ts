import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MineComponent } from './mine.component';
import {TranslateModule} from "@ngx-translate/core";
import {MaterialModule} from "@shared/material/material.module";
import {SharedModule} from "@shared/shared.module";
import {RouterModule} from "@angular/router";
import {AppDialogModule} from "@shared/components/app-dialog/app-dialog.module";



@NgModule({
  declarations: [
    MineComponent
  ],
  imports: [
    CommonModule, TranslateModule, MaterialModule, SharedModule, RouterModule, AppDialogModule
  ]
})
export class MineModule { }
