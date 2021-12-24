import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabinetComponent } from './cabinet.component';
import {TranslateModule} from "@ngx-translate/core";
import {MaterialModule} from "@shared/material/material.module";
import {SharedModule} from "@shared/shared.module";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    CabinetComponent
  ],
  imports: [
    CommonModule, TranslateModule, MaterialModule, SharedModule, RouterModule
  ]
})
export class CabinetModule { }
